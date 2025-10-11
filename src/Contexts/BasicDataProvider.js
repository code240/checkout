import React, { createContext, useRef, useState } from 'react'
import Api from '../Helper/Api';
import { TOP_BANKS } from '../Data/Constants';
import { ProductsParsing } from '../Helper/Helper';

const BasicContext = createContext();

const BasicDataProvider = ({ children }) => {

    const [order, setOrder] = useState({});
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [subtotal, setSubtotal] = useState(0);
    const [shippingCharges, setShippingCharges] = useState(0);
    const [taxTotal, setTaxTotal] = useState(0);
    const [taxType, setTaxType] = useState("Inclusive");
    const [currency, setCurrency] = useState("");
    const [discountCode, setDiscountCode] = useState("");
    const [discountAmount, setDiscountAmount] = useState(0);
    const [userLatestAdderess, setUserLatestAdderess] = useState(0);
    const [isUpiCollect, setIsUpiCollect] = useState(false);
    const [isUpiQR, setIsUpiQR] = useState(false);
    const [isUpiIntent, setIsUpiIntent] = useState(false);
    const [seamlessPaymentMethods, setSeamlessPaymentMethods] = useState([]);
    const [netbankingBanks, setNetbankingBanks] = useState([]);
    const [wallets, setWallets] = useState([]);
    const [favBanks, setFavBanks] = useState([]);
    const [Vpas, setVpas] = useState([]);
    const [bankShortcuts, setBankShortcuts] = useState([]);
    const [installedApps, setInstalledApps] = useState([]);
    const [shippingHandles, setShippingHandles] = useState([]);
    const [freeDelivery, setFreeDelivery] = useState(false);
    const [shippingAmount, setShippingAmount] = useState(true);
    const [selectedShippingHandle, setSelectedShippingHandle] = useState(true);
    const [codAvailablity, setCodAvailablity] = useState(false);
    const [shopLogo, setShopLogo] = useState("");
    const [shopName, setShopName] = useState("");
    const [shopId, setShopId] = useState("");
    const [isCheckoutCreated, setIsCheckoutCreated] = useState(false);
    const [isCheckoutUpdated, setIsCheckoutUpdated] = useState(false);
    const [showFullScreenLoader, setShowFullScreenLoader] = useState(false);
    const [addressList, setAddressList] = useState([]);
    const [fetchingAddressList, setFetchingAddressList] = useState([]);




    const GetMethods = async (shopId, orderId) => {
        const response = await Api.post(
            `${shopId}/${orderId}/payment/methods`
        );

        if (response?.data?.status) {
            let data = response.data.data;
            console.log(data);

            let prepareMethods = [];
            if ((data?.upi && data?.upi?.data) && (data?.upi?.data?.QR || data?.upi?.data?.UPI || data?.upi?.data?.INTENT)) {
                prepareMethods.push({
                    title: "UPI",
                    icon: "bi bi-collection-play",
                    code: 'upi'
                });
                if (data?.upi?.data?.QR) {
                    setIsUpiQR(true);
                }
                if (data?.upi?.data?.INTENT) {
                    setIsUpiIntent(true);
                }
                if (data?.upi?.data?.UPI) {
                    setIsUpiCollect(true);
                }
            }
            if ((data?.debitcard && data?.debitcard?.data && data?.debitcard?.data?.length > 0) || (data?.creditcard && data?.creditcard?.data && data?.creditcard?.data?.length > 0)) {
                prepareMethods.push({
                    title: "Cards",
                    icon: "bi bi-credit-card",
                    code: 'cards'
                });
            }
            if (data?.netbanking && data?.netbanking?.data && data?.netbanking?.data?.length > 0) {
                setNetbankingBanks(data?.netbanking?.data);
                prepareMethods.push({
                    title: "Netbanking",
                    icon: "bi bi-bank",
                    code: 'netbanking'
                });

                // handle fav banks and bank shortcuts
                let favList = [];
                let ShuffledFavBanks = [];
                data?.netbanking?.data?.forEach((ele) => {
                    if (TOP_BANKS.includes(ele?.code)) {
                        favList.push(ele);
                    }
                })
                ShuffledFavBanks = favList
                    .map(value => ({ value, sort: Math.random() }))
                    .sort((a, b) => a.sort - b.sort)
                    .map(({ value }) => value);

                setFavBanks(ShuffledFavBanks.slice(0, 6));
                setBankShortcuts(ShuffledFavBanks.slice(6, 9));


            }
            if (data?.wallet && data?.wallet?.data && data?.wallet?.data?.length > 0) {
                setWallets(data?.wallet?.data);
                prepareMethods.push({
                    title: "Wallet",
                    icon: "bi bi-wallet2",
                    code: 'wallet'
                });
            }
            setSeamlessPaymentMethods(prepareMethods);
        }
    }

    const HandleInstalledApps = (installApps, shopId, orderId) => {
        installApps.forEach((ele) => {
            if (ele?.app_image == "seamless") {
                GetMethods(shopId, orderId)
            }
        });
    }

    const fetchAddressList = async (shopId, orderId) => {
        setFetchingAddressList(true);
        const response = await Api.post(
            `${shopId}/user/${orderId}/address/fetch`
        );
        setFetchingAddressList(false);
        if (response?.data?.status && response?.data?.data?.length > 0) {
            setAddressList(response?.data?.data);
        } else {
            setAddressList([]);
        }
    }

    const UpdateOrder = async (addressId, shopId, orderId) => {
        const response = await Api.post(
            `${shopId}/user/update/order/${orderId}`,
            {
                address_id: addressId
            }
        );

        if (response?.data?.status === true) {
            setIsCheckoutUpdated(true);
            let updatedCheckout = response.data.data;
            console.log(updatedCheckout);
            let orderTotal = updatedCheckout.Amount;
            setShippingHandles(updatedCheckout.ShippingHandle);

            setSubtotal(updatedCheckout.Subtotal);
            setDiscountAmount(updatedCheckout.DiscountAmount);
            setDiscountCode(updatedCheckout.DiscountCode);
            setCodAvailablity(updatedCheckout.isCodCheckPassed);
            setTaxTotal(updatedCheckout.Tax);
            setTaxType(updatedCheckout.TaxType);
            setCurrency(updatedCheckout.Currency);
            ProductsParsing(updatedCheckout.LineItems, updatedCheckout.Rate, setItems);
            // if only 1 handle exist and that is 0 then...
            if (updatedCheckout.ShippingHandle?.length == 1 && updatedCheckout.ShippingHandle[0] && updatedCheckout.ShippingHandle[0]?.priceV2?.amount != undefined && parseInt(updatedCheckout.ShippingHandle[0]?.priceV2?.amount) == 0) {
                setFreeDelivery(true);
            } else {
                setFreeDelivery(false);
            }
            // select default 0th handle...
            if (updatedCheckout.ShippingHandle?.length > 0 && updatedCheckout.ShippingHandle[0] != undefined) {
                setShippingCharges(parseInt(updatedCheckout.ShippingHandle[0]?.priceV2?.amount) * 100);
                setSelectedShippingHandle(updatedCheckout.ShippingHandle[0].handle);
                setTotal(orderTotal + (parseInt(updatedCheckout.ShippingHandle[0]?.priceV2?.amount) * 100));
            }
            // if no handle 
            if (updatedCheckout.ShippingHandle?.length == 0) {
                setShippingCharges(0);
                setSelectedShippingHandle("standard");
            }
            return true;
        }
        return false;
    }

    const FetchAddress = async (shopId, orderId) => {
         const response = await Api.post(
            `${shopId}/user/${orderId}/address/fetch`,
          
        );

        if (response?.data?.status === true) {
            let addresses = response.data.data;
            console.log(addresses);
            
            if (addresses?.length > 0) {
                let last = addresses[addresses?.length - 1];
                
                setUserLatestAdderess({
                    "address_ref_id": last.id,
                    "city": last.city,
                    "country": last.country,
                    "email": last.email,
                    "firstName": last.first_name,
                    "lastName": last.last_name,
                    "line1": last.line1,
                    "line2": last.line2,
                    "phone": last.phone,
                    "state": last.state,
                    "zipcode": last.zipcode
                });
                UpdateOrder(last.id, shopId, orderId);
                return `/${shopId}/${orderId}/checkout`
            } else {
                return `/${shopId}/${orderId}/checkout/address`
            }
        }
    }

    const value = {
        order, setOrder,
        items, setItems,
        total, setTotal,
        subtotal, setSubtotal,
        shippingCharges, setShippingCharges,
        taxTotal, setTaxTotal,
        taxType, setTaxType,
        currency, setCurrency,
        discountCode, setDiscountCode,
        discountAmount, setDiscountAmount,
        userLatestAdderess, setUserLatestAdderess,
        isUpiCollect, setIsUpiCollect,
        isUpiQR, setIsUpiQR,
        isUpiIntent, setIsUpiIntent,
        seamlessPaymentMethods, setSeamlessPaymentMethods,
        GetMethods, HandleInstalledApps,
        netbankingBanks, setNetbankingBanks,
        wallets, setWallets,
        favBanks, setFavBanks,
        bankShortcuts, setBankShortcuts,
        installedApps, setInstalledApps,
        Vpas, setVpas,
        UpdateOrder, fetchAddressList,
        shippingHandles, setShippingHandles,
        freeDelivery, setFreeDelivery,
        selectedShippingHandle, setSelectedShippingHandle,
        codAvailablity, setCodAvailablity,
        shopLogo, setShopLogo,
        shopName, setShopName,
        shopId, setShopId,
        isCheckoutCreated, setIsCheckoutCreated,
        isCheckoutUpdated, setIsCheckoutUpdated,
        showFullScreenLoader, setShowFullScreenLoader,
        fetchingAddressList, setFetchingAddressList,
        addressList, setAddressList,
        FetchAddress
    }
    return (
        <BasicContext.Provider value={value}>
            {
                showFullScreenLoader ? (
                    <div className='black-loader-bg'>
                        <div class="loader-new paytring-animate">
                            <img src={shopLogo} loading="lazy" alt="logo" class="paytring-logo-new" />
                        </div>
                    </div>
                ) : null
            }

            {children}
        </BasicContext.Provider>
    )
}

export { BasicDataProvider, BasicContext }