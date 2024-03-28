import { gql } from '@apollo/client';

export const queryCustomer = gql`
  query GET_CHECKOUT_ORDER {
    customer {
      sessionToken
      cartNonce
      orders {
        nodes {
          cartHash
          cartTax
          commentCount
          commentStatus
          createdVia
          currency
          customerIpAddress
          customerNote
          customerUserAgent
          databaseId
          date
          dateCompleted
          datePaid
          discountTax
          discountTotal
          hasBillingAddress
          hasDownloadableItem
          hasShippingAddress
          id
          isDownloadPermitted
          modified
          needsPayment
          needsProcessing
          needsShippingAddress
          orderKey
          orderNumber
          orderVersion
          paymentMethod
          paymentMethodTitle
          pricesIncludeTax
          shippingAddressMapUrl
          shippingTax
          shippingTotal
          status
          subtotal
          total
          totalTax
          transactionId
        }
      }
    }
  }
`;
