import { gql } from '@apollo/client';

const queryCeckoutNode = `

      clientMutationId
      redirect
      result
      order {
        cartHash
        cartTax
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
        lineItems {
          nodes {
              databaseId
              id
              orderId
              productId
              quantity
              subtotal
              subtotalTax
              taxClass
              taxStatus
              total
              totalTax
              variationId
              product {
                cursor
                node {
                    excerpt
                    featured
                    name
                    shortDescription
                    title
                    uri
                    featuredImage {
                                
                      node {
                          altText

                          sourceUrl
                          srcSet
                        
                          title
                     
                      }
                  }
                }
            }
          }
        }
        billing {
          address1
          address2
          city
          company
          country
          email
          firstName
          lastName
          phone
          postcode
          state
        }
        shipping {
          address1
          address2
          city
          company
          country
          email
          firstName
          lastName
          phone
          postcode
          state
        }
      }
  
`;

const queryCeckoutContent = gql`
  mutation CHECKOUT_MUTATION($input: CheckoutInput!) {
    checkout(input: $input) {
     ${queryCeckoutNode}
    }
  }
`;

export default queryCeckoutContent;
