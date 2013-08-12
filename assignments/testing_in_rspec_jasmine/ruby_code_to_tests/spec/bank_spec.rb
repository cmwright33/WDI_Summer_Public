require_relative 'spec_helper'
require_relative '../bank'

describe Bank do
<<<<<<< HEAD
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

=======
	let(:bank) {Bank.new("Goldman Sucks")}

	describe ".new" do
		it "creates a bank object" do
			expect(bank).to_not eq(nil)
		end

		it "has no accounts when created" do
			expect(bank.accounts.count).to eq(0)
		end
	end

	describe "#create_account" do
		it "adds an account" do
			bank.create_account("Anthony Weiner", 0)
			expect(bank.accounts.count).to eq(1)
		end

		it "saves the initialized value" do
			bank.create_account("Anthony Weiner", 100)
			expect(bank.accounts["Anthony Weiner"]).to eq(100)
		end
	end

	describe "#deposit" do
		it "puts money in accounts" do
			bank.create_account("Person", 200)
			bank.deposit("Person", 300)
			expect(bank.accounts["Person"]).to eq(500)
		end
	end

	describe "#withdraw" do
		it "takes money out of an account" do
			bank.create_account("Person", 200)
			bank.withdraw("Person", 100)
			expect(bank.accounts["Person"]).to eq(100)
		end

		it "does not allow withdraw of too much money" do
			bank.create_account("Person", 200)
			bank.withdraw("Person", 300)
			expect(bank.accounts["Person"]).to eq(200)
		end

		it "does not allow withdraw of a negative amount" do
			bank.create_account("Person", 200)
			bank.withdraw("Person", -1000)
			expect(bank.accounts["Person"]).to eq(200)
		end

		it "does not allow withdraw from nonexistant accounts" do
			expect(bank.withdraw("anonymous", 100)).to eq(nil)
			expect(bank.accounts["anonymous"]).to eq(nil)
		end
	end

	describe "#balance" do
		it "returns the balance of an account" do
			bank.create_account("Person", 200)
			expect(bank.balance("Person")).to eq(200)
		end
	end
>>>>>>> upstream/master
end