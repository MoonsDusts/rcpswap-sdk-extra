import { Blockchain } from '../src'

describe('Blockchain', () => {
  it('has correct blockhain enum values', () => {
    expect(Blockchain.ETHEREUM).toEqual(1)
    expect(Blockchain.BINANCE_SMART_CHAIN).toEqual(2)
    expect(Blockchain.ARBITRUM_NOVA).toEqual(3)
    expect(Blockchain.POLYGON).toEqual(4)
  })
})
