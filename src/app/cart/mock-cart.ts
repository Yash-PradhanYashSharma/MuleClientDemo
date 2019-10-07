import {Cart} from './Cart';

export const CART: Cart = {
  'userId': '123',
  'productStoreId': 'India-Indore-zone-A',
  'orderName': 'Purchase Order',
  'createdBy': 'Customer 1',
  'orderDate': '12/03/19',
  'products': [
    {
      'productId': 'BASICTEE',
      'productName': 'BASIC TEE',
      'quantity': '2',
      'price': '10'
    },
    {
      'productId': 'BASICTEEBLUE',
      'productName': 'BASIC TEE BLUE',
      'quantity': '4',
      'price': '33'
    }
  ]
};

export const CARTJSON = '{\n' +
  '   "userId":"123",\n' +
  '   "productStoreId":"1",\n' +
  '   "orderName":"purchase-order",\n' +
  '   "createdBy":"kirti",\n' +
  '   "orderDate":"12/03/19",\n' +
  '   "products":[\n' +
  '      {\n' +
  '         "productId":"BASICTEE",\n' +
  '         "productName":"BASIC TEE",\n' +
  '         "quantity":1,\n' +
  '         "price":10\n' +
  '      },\n' +
  '      {\n' +
  '         "productId":"BASICTEEBLUE",\n' +
  '         "productName":"BASIC TEE BLUE",\n' +
  '         "quantity":2,\n' +
  '         "price":1\n' +
  '      }\n' +
  '   ]\n' +
  '}';

export const ORDERJSON = '{\n' +
  '    "orderId":50\n' +
  '}';

