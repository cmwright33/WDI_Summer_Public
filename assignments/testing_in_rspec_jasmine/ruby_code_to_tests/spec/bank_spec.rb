require_relative 'spec_helper'
require_relative '../bank'

describe Bank do
  let(:bank) {Bank.new('New Bank')}

  describe ".new" do
    it "creates a Bank object" do
      expect(bank).to_not eq nil
    end
    it "had no accounts" do
      expect(bank.accounts.count).to eq 0
    end
  end

  describe "#name" do
    it "the Bank has a name" do
      expect(bank.name).to eq 'New Bank'
    end
  end

  describe "#create_account" do
    it "creates an account"do
    bank.create_account('John Smith', 400)
    expect(bank.accounts['John Smith']).to eq 400
    expect(bank.accounts.count).to eq 1
  end
end
  describe "#deposit" do
    it "deposits money into an account" do
    bank.create_account('John Smith', 400)
    bank.deposit('John Smith', 50)
    expect(bank.accounts['John Smith']).to eq 450
    end
  end

  describe "#withdraw" do
    it "withdraws money from a account" do
      bank.create_account('John Smith', 400)
      bank.withdraw('John Smith', 50)
      expect(bank.accounts['John Smith']).to eq 350
    end
  end

  describe "#balance" do
    it "checks the balance" do
      bank.create_account('John Smith', 400)
      bank.balance('John Smith')
      expect(bank.balance('John Smith')).to eq 400
    end
  end

end