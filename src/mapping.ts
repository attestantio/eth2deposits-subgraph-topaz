import { DepositEvent } from '../generated/DepositContract/DepositContract'
import { Deposit } from '../generated/schema'

export function handleDepositEvent(event: DepositEvent): void {
  let deposit = new Deposit(event.params.index.toHex())
  deposit.validatorPubKey = event.params.pubkey
  deposit.transactionHash = event.transaction.hash
  deposit.withdrawalCredentials = event.params.withdrawal_credentials
  deposit.amount = event.params.amount
  deposit.signature = event.params.signature
  deposit.index = event.params.index
  deposit.save()
}

