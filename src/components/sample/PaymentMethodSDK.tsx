// import type { Employee_Bank_Account } from '@gusto/embedded-api';
// import React, { useEffect, useMemo, useState } from 'react';
// import { useGustoApi } from '@/contexts/GustoApiProvider';

// interface RenderBankAccountProps {
//   bankAccount?: Employee_Bank_Account;
//   formattedSplitAmount?: string;
//   children?: JSX.Element;
// }
// export const RenderBankAccount = ({ bankAccount, children }: RenderBankAccountProps) => {
//   if (!bankAccount) return null;
//   const { routing_number, hidden_account_number, account_type } = bankAccount;
//   return (
//     <>
//       {children && children}
//       <section>
//         <strong>Account ending: {hidden_account_number}</strong>
//         <p>{account_type}</p>
//       </section>
//       <section>
//         <strong>Routing Number </strong>
//         <p>{routing_number}</p>
//       </section>
//     </>
//   );
// };

// const PaymentMethodContext = React.createContext({
//   bankAccounts: null,
//   loading: false,
//   error: null,
// });
// export const useProductContext = () => React.useContext(PaymentMethodContext);

// interface PaymentMethodProps {
//   employeeId: string;
//   children?: JSX.Element[];
// }
// interface PaymentMethodComponent extends React.FC<PaymentMethodProps> {
//   Header: React.FC<PaymentHeaderProps>;
//   Body: React.FC<PaymentBodyProps>;
// }
// const PaymentMethod: PaymentMethodComponent = ({ employeeId, children }: PaymentMethodProps) => {
//   const { GustoClient } = useGustoApi();

//   const [paymentMethods, setPaymentMethods] = useState(null);
//   const [bankAccounts, setBankAccounts] = useState(null);
//   // const { t } = useTranslation();

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPaymentMethods = async () => {
//       try {
//         const response =
//           await GustoClient.employeePaymentMethod.getEmployeesEmployeeIdPaymentMethod({
//             employeeId,
//           });
//         setPaymentMethods(response);
//       } catch (err) {
//         setPaymentMethods(null);
//         setError(err);
//       }
//     };
//     const fetchBankAccounts = async () => {
//       try {
//         const response = await GustoClient.employeePaymentMethod.getEmployeesEmployeeIdBankAccounts(
//           {
//             employeeId,
//           },
//         );
//         setBankAccounts(response);
//       } catch (err) {
//         setBankAccounts(null);
//         setError(err);
//       }
//     };
//     setLoading(true);
//     Promise.all([fetchPaymentMethods(), fetchBankAccounts()])
//       .then(() => {
//         setLoading(false);
//       })
//       .catch(err => setError(err));
//   }, [employeeId, GustoClient.employeePaymentMethod]);
//   const context = useMemo(
//     () => ({
//       bankAccounts,
//       paymentMethods,
//       loading,
//       error,
//     }),
//     [bankAccounts, paymentMethods, loading, error],
//   );
//   if (loading) {
//     return <h1>Loading...</h1>;
//   }
//   if (error) {
//     return (
//       <>
//         <h1>Error:</h1>
//         <small>{JSON.stringify(error)}</small>
//       </>
//     );
//   }
//   return bankAccounts?.length ? (
//     <PaymentMethodContext.Provider value={context}>
//       <article>
//         {React.Children.map(children, child => {
//           if (child.type.name === 'PaymentHeader') {
//             return React.cloneElement(child, { id: employeeId });
//           }
//           return null;
//         })}
//         <section>
//           {/* <Card.Title as="h2">{t("paymentMethod.title")}</Card.Title> */}
//           {bankAccounts.map((bankAccount: Employee_Bank_Account) => {
//             if (!children) {
//               return <RenderBankAccount key={bankAccount.uuid} bankAccount={bankAccount} />;
//             }
//             return React.Children.map(children, child => {
//               if (child.type.name === 'PaymentBody') {
//                 return React.cloneElement(child, {
//                   key: bankAccount.uuid,
//                   bankAccount,
//                 });
//               }
//               return null;
//             });
//           })}
//         </section>
//       </article>
//     </PaymentMethodContext.Provider>
//   ) : null;
// };

// type PaymentHeaderProps =
//   | {
//       id: string;
//       children?: JSX.Element;
//     }
//   | { children?: JSX.Element; id?: string };
// const PaymentHeader: React.FC<PaymentHeaderProps> = ({ id, children }) => {
//   if (!children) {
//     return null;
//   }
//   return (
//     <article>
//       <div>
//         <p>{id}</p>
//         {children}
//       </div>
//     </article>
//   );
// };

// interface PaymentBodyProps extends RenderBankAccountProps {
//   children?: JSX.Element;
// }
// const PaymentBody: React.FC<PaymentBodyProps> = ({
//   children,
//   bankAccount,
//   formattedSplitAmount,
// }) => {
//   if (children) {
//     return children;
//   }
//   return (
//     <RenderBankAccount
//       key={bankAccount.uuid}
//       bankAccount={bankAccount}
//       formattedSplitAmount={formattedSplitAmount}
//     />
//   );
// };

// PaymentMethod.Header = PaymentHeader;
// PaymentMethod.Body = PaymentBody;
// export default PaymentMethod;
