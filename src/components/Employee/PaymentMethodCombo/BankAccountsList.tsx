import { VisuallyHidden } from 'react-aria'
import { Cell, Column, Row, Table, TableBody, TableHeader } from 'react-aria-components'
import { useTranslation } from 'react-i18next'
import PencilSvg from '@/assets/icons/pencil.svg'
import TrashCanSvg from '@/assets/icons/trashcan.svg'
import { Hamburger, HamburgerItem } from '@/components/Common'
import { usePaymentMethod } from '@/components/Employee/PaymentMethodCombo/PaymentMethod'

export function BankAccountsList() {
  const { bankAccounts, watchedType, mode, handleEdit, handleDelete } = usePaymentMethod()
  const { t } = useTranslation('Employee.PaymentMethod')

  if (watchedType !== 'Direct Deposit' || bankAccounts.length < 1 || mode !== 'LIST') return

  return (
    <>
      <Table aria-label={t('bankAccountsListLabel')}>
        <TableHeader>
          <Column isRowHeader>{t('routingNumberColumn')}</Column>
          <Column>{t('accountNumberColumn')}</Column>
          <Column>{t('accountTypeColumn')}</Column>
          <Column>
            <VisuallyHidden>{t('actionColumn')}</VisuallyHidden>
          </Column>
        </TableHeader>
        <TableBody>
          {bankAccounts.map(ba => (
            <Row key={ba.uuid}>
              <Cell>{ba.routing_number}</Cell>
              <Cell>{ba.hidden_account_number}</Cell>
              <Cell>{ba.account_type}</Cell>
              <Cell>
                <Hamburger title={t('hamburgerTitle')}>
                  <HamburgerItem
                    icon={<img src={PencilSvg} aria-hidden />}
                    onAction={() => {
                      handleEdit(ba.uuid)
                    }}
                  >
                    {t('editBankAccountCTA')}
                  </HamburgerItem>
                  <HamburgerItem
                    icon={<img src={TrashCanSvg} aria-hidden />}
                    onAction={() => {
                      handleDelete(ba.uuid)
                    }}
                  >
                    {t('deleteBankAccountCTA')}
                  </HamburgerItem>
                </Hamburger>
              </Cell>
            </Row>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
