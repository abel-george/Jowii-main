import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ScrollText } from 'lucide-react';
import { CollapsibleAccordion, CollapsibleAccordionItem } from '@/components/ui/CollapsibleAccordion';

export default function JowihCreditsPage() {
  return (
    <div className="min-h-screen">
      {/* Header Banner */}
      <div className="pt-28 sm:pt-32 pb-16 sm:pb-24 border-b" style={{ background: 'var(--ink)', color: 'var(--white)', borderColor: 'var(--line-light)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider mb-6"
            style={{ color: 'rgba(255, 254, 250, 0.7)' }}
          >
            <ArrowLeft className="w-4 h-4" style={{ color: 'var(--brass)' }} />
            <span>Back to Home</span>
          </Link>

          <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase block mb-3" style={{ color: 'var(--brass)' }}>
            CONSTITUTION ARTICLE LIX &amp; THE JOWIH CREDITS DOCUMENT
          </span>
          <h1 className="text-4xl sm:text-6xl uppercase tracking-tight leading-[1.02] max-w-4xl" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
            Jowih Credits
          </h1>
          <p className="text-base sm:text-xl max-w-3xl mt-6 leading-relaxed" style={{ color: 'rgba(255, 254, 250, 0.75)' }}>
            The complete Jowih Credits framework &mdash; the constitutional foundations and the operating system for Africa&apos;s asset-backed bridge token.
          </p>
        </div>
      </div>

      <div className="py-16 pb-24" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Intro & Key Definition */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl uppercase tracking-tight" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
              Africa&apos;s Settlement Bridge Layer
            </h2>
            <p className="leading-relaxed">
              Jowih Credits are established by Article LIX of the Foundation Constitution as a stable, asset-backed digital utility bridge token &mdash; not a speculative cryptocurrency, not legal tender, and not a security. They settle cross-border value instantly between national currencies through a partner-only execution model: the Foundation issues and holds the credit; partners handle all conversions. This page combines the constitutional article with the full Jowih Credits operating document.
            </p>
            <div className="flex items-start gap-3 p-4 border" style={{ borderColor: 'var(--line-light)' }}>
              <ScrollText className="w-5 h-5 shrink-0 mt-0.5" style={{ color: 'var(--brass)' }} />
              <p className="text-sm leading-relaxed">
                Credits never enter the domestic economy: at the point of spending they convert instantly to local currency in the background. Merchants and billers always receive local currency. Credits are minted and burned in real time as value crosses borders.
              </p>
            </div>
          </section>

          {/* Credits Accordion */}
          <CollapsibleAccordion defaultOpenId="cb-01" navigation={[
            { id: 'cb-01', number: '01', title: 'Constitution - Article LIX' },
            { id: 'cb-02', number: '02', title: 'Core principle and positioning' },
            { id: 'cb-03', number: '03', title: 'Three wallets' },
            { id: 'cb-04', number: '04', title: 'Transaction modes' },
            { id: 'cb-05', number: '05', title: 'Partner-only execution' },
            { id: 'cb-06', number: '06', title: 'Fee schedule' },
            { id: 'cb-07', number: '07', title: 'Partner margins' },
            { id: 'cb-08', number: '08', title: 'Domestic spending and holding' },
            { id: 'cb-09', number: '09', title: 'Reserves and liquidity' },
            { id: 'cb-10', number: '10', title: 'Government tax remittance' },
            { id: 'cb-11', number: '11', title: 'Partner integration standards' },
            { id: 'cb-12', number: '12', title: 'User procedures' },
            { id: 'cb-13', number: '13', title: 'AML, privacy and neutrality' },
            { id: 'cb-14', number: '14', title: 'Disputes, reporting and amendments' },
          ]}>
            <CollapsibleAccordionItem
              id="cb-01"
              number="01"
              title="Constitution - Article LIX: Jowih Credits"
              summary="The supreme-law foundation: nature, definitions, licenses, reserves, modes and prohibitions"
            >
                <p className="leading-relaxed font-semibold">Recital</p>
                <p className="leading-relaxed">Jowih Credits are established as a stable, asset-backed digital utility bridge token. They are not a speculative cryptocurrency. They do not involve mining, staking, interest, yield, or dividends.</p>
                <p className="leading-relaxed">Across Africa, cross-border trade and remittances are constrained by limited access to major reserve currencies. This constraint creates friction like delays, high costs, and reduced economic activity , not because of any failure in the global financial system, but because of the structural reality of currency availability.</p>
                <p className="leading-relaxed">Jowih Credits are designed to provide a neutral, independently governed bridge infrastructure through which participating states, financial institutions, and approved payment providers may facilitate cross-border transactions on an equitable and interoperable basis.</p>
                <p className="leading-relaxed">The system is intended to support greater connectivity between national currencies and payment systems while respecting the monetary, financial, and institutional frameworks of each participating state. National currencies remain central to domestic economic activity, while the JOWIH Credit infrastructure provides an additional bridge for eligible cross-border transactions.</p>
                <p className="leading-relaxed">Through Credit-Routed FX and interoperable payment infrastructure, the system seeks to improve the efficiency and circulation of available currency liquidity across participating markets, facilitate trade and payments, and reduce unnecessary friction arising from fragmented currency and payment systems.</p>
                <p className="leading-relaxed font-semibold">Participation is founded upon cooperation, mutual benefit, equal treatment, and respect for the sovereignty and financial systems of participating states.</p>
                <p className="leading-relaxed">The Foundation&apos;s primary economic model is the Treasury Engine ; holding Credits as a stable, asset-backed store of value. The Foundation does not earn from transaction fees. Instead, it earns from the float generated by held Credits, which are invested in mission-aligned projects with all returns flowing to the Mission Fund. This positions the Foundation as a neutral infrastructure layer, not a competitor to partners.</p>
                <p className="leading-relaxed">Jowih Credits operate through a partner-only execution model. The Foundation issues and holds the credit. Partners handle ALL conversions. The Foundation does not operate any exchange, conversion, or execution service. This ensures the Foundation never competes with partners and remains purely the credit layer.</p>
                <p className="leading-relaxed">Credits exist solely in the bridge layer. They never enter the domestic economy. When Credits are used for domestic spending, partners convert them instantly to local currency in the background. This conversion is automatic, seamless, and invisible to the user. Partners handle the conversion at the point of spending.</p>
                <p className="leading-relaxed">Auto-Conversion is the default mode for all transactions. Holding Credits is optional. Credits are a bridge, not a currency.</p>
                <p className="leading-relaxed">Jowih Credits shall be issued and operated in compliance with the Mauritius VAITOS Act 2021, FATF Recommendation 15, and applicable host country laws. The Foundation shall obtain and maintain Class S, Class O, Class M, and Class R licenses from the Mauritius Financial Services Commission, or such consolidated license classes as the FSC may permit.</p>
                <p className="leading-relaxed">Jowih Credits are designed to accelerate the African Continental Free Trade Area by providing a stable, low-cost, instant settlement layer for intra-African trade. They complement, rather than compete with, existing foreign exchange markets and payment systems.</p>
                <p className="leading-relaxed font-semibold">59.1 Definitions</p>
                <p className="leading-relaxed">(a) &quot;Jowih Credit&quot; means the Foundation-issued, asset-backed digital utility bridge token.</p>
                <p className="leading-relaxed">(b) Jowih Credits are not legal tender, not a currency, and not a security under the Mauritius Securities Act 2005.</p>
                <p className="leading-relaxed">(c) Jowih Credits confer no ownership, voting, profit, interest, yield, or investment rights in the Foundation or any affiliated entity.</p>
                <p className="leading-relaxed">(d) &quot;Jowih Ecosystem&quot; includes New Dawn City, the Jowih COS, Foundation-owned assets and projects, spin-off companies, and approved partners.</p>
                <p className="leading-relaxed">(e) &quot;PSPS&quot; means Payment Service Provider Systems, including mobile money operators (e.g., M-Pesa, MTN, Airtel), banks, fintech payment gateways (e.g., Flutterwave, Paystack), card networks (Mastercard, Visa), global fintech platforms (PayPal, Stripe), and other licensed payment processors the Foundation may partner with.</p>
                <p className="leading-relaxed">(f) &quot;High-Liquid Reserves&quot; means cash, gold bullion, short-term government securities, and such other highly liquid assets as the Combined Trusts Board may designate, with a target allocation of not less than thirty percent (30%) and not more than fifty percent (50%) of total backing.</p>
                <p className="leading-relaxed">(g) &quot;Foundation Assets&quot; means current and future revenue streams from the Ecosystem, Foundation-owned companies, real estate off Zone and within Zones, ADFA projects, and any other high-value assets approved by the Combined Trusts Board, with a target allocation of not less than fifty percent (50%) and not more than seventy percent (70%) of total backing.</p>
                <p className="leading-relaxed font-semibold">Provided that High-Liquid Reserves and Foundation Assets shall at all times sum to one hundred percent (100%) of total backing.</p>
                <p className="leading-relaxed">(h) &quot;Partner Channels&quot; means end user channels operated by PSPSs, banks, card networks, and fintech platforms for individuals, SMEs, governments, corporations, and institutional investors.</p>
                <p className="leading-relaxed">(i) &quot;Flow Engine&quot; means the Foundation&apos;s transaction layer where partners handle high-frequency cross-border flows (remittances, SME trade, platform payments) and earn their own margins.</p>
                <p className="leading-relaxed">(j) &quot;Treasury Engine&quot; means the Foundation&apos;s value-holding layer where Credits are held in the Foundation Treasury, allowing governments, institutions, and multiplayers to hold value because it is stable and asset-backed. The Foundation earns from the float generated by held Credits.</p>
                <p className="leading-relaxed">(k) &quot;Auto-Conversion Mode&quot; means the default mode where Credits convert instantly at FX layer from one currency to another local currency or internal from credit to local currency for domestic spending, and to preferred currency for cross-border receipt. This is the system&apos;s default behavior.</p>
                <p className="leading-relaxed">(l) &quot;Holding Mode&quot; means the optional mode where users may choose to hold Jowih Credits in their wallets for future use.</p>
                <p className="leading-relaxed font-semibold">59.2 Purpose</p>
                <p className="leading-relaxed">Jowih Credits shall function as:</p>
                <p className="leading-relaxed">(a) A stable bridge between African local currencies and foreign currencies, facilitating cross-border trade, remittances, and investment.</p>
                <p className="leading-relaxed">(b) A facilitator of low-cost, instant cross-border payments within Africa and globally, directly supporting the African Continental Free Trade Area (AfCFTA) by providing a reliable settlement layer for intra-African trade.</p>
                <p className="leading-relaxed">(c) A stable channel for global investors and diaspora to bring capital into Africa across all 54 countries easily increasing circulation of major currencies like USD, EUR, CNY to Africa.</p>
                <p className="leading-relaxed">(d) A complementary financial bridge infrastructure, that works alongside existing global and regional payment systems, offering an additional stable, fast, low-cost option for value transfer.</p>
                <p className="leading-relaxed">(e) A dual-engine model operating through partners who handle all conversions, while the Foundation focuses on the stable credit layer and treasury management, earning from the float generated by held Credits.</p>
                <p className="leading-relaxed">(f) The Foundation shall not earn from transaction fees. Its primary economic model is the Treasury Engine - holding Credits and investing the float in mission-aligned projects, with all returns flowing to the Mission Fund.</p>
                <p className="leading-relaxed">The Foundation shall actively promote the use of national currencies for all domestic obligations, salaries, stipends, and local transactions. Jowih Credits shall not replace or compete with national currencies for domestic use. Credits never enter the domestic economy. They convert instantly to local currency for domestic spending.</p>
                <p className="leading-relaxed font-semibold">59.3 Regulatory Compliance</p>
                <p className="leading-relaxed">The Foundation shall:</p>
                <p className="leading-relaxed">(a) Obtain and maintain licenses from the Mauritius Financial Services Commission (FSC) under the VAITOS Act 2021 covering all its regulated activities, including:</p>
                <p className="leading-relaxed font-semibold">(i) Class S (Virtual Asset Market Place) - License to operate the Foundation Exchange for matching orders and facilitating the exchange of Credits for fiat currency or other virtual assets;</p>
                <p className="leading-relaxed font-semibold">(ii) Class O (Virtual Asset Wallet Services) - License to operate  Jowih wallets, enabling the transfer of Credits between users;</p>
                <p className="leading-relaxed font-semibold">(iii) Class M (Virtual Asset Broker-Dealer) - License required because the Foundation facilitates the exchange between fiat currency and Jowih Credits;</p>
                <p className="leading-relaxed font-semibold">(iv) Class R (Virtual Asset Custodian) - License required for the safekeeping and administration of client virtual assets and/or instruments enabling control over such virtual assets.</p>
                <p className="leading-relaxed font-semibold">Provided that the Foundation may apply for consolidated or combined license classes if the FSC permits such treatment, reducing regulatory duplication while maintaining full compliance.</p>
                <p className="leading-relaxed">(b) Comply with FATF Recommendation 15 (new technologies and virtual assets) and all applicable AML/CFT requirements under the Financial Intelligence and Anti-Money Laundering Act (FIAMLA) 2002 (Mauritius) and the FSC&apos;s AML/CFT Handbook.</p>
                <p className="leading-relaxed">(c) Maintain a physical office in Mauritius and ensure that business activities are directed and managed from Mauritius, as a matter of substance.</p>
                <p className="leading-relaxed">(d) Never list Jowih Credits on any internal or external public cryptocurrency exchange for speculative trading.</p>
                <p className="leading-relaxed">(e) Designate a senior executive or law firm, residing in Mauritius, responsible for regulatory compliance.</p>
                <p className="leading-relaxed">(f) Cooperate with host country regulators where the Foundation operates exchange services, including obtaining equivalent licenses as required.</p>
                <p className="leading-relaxed">(g) Maintain the minimum required unimpaired capital for each license class.</p>
                <p className="leading-relaxed">(h) Segregate client funds from operational funds and maintain them in trust accounts as required by the FSC.</p>
                <p className="leading-relaxed">(i) File annual audited financial statements with the FSC.</p>
                <p className="leading-relaxed font-semibold">59.4 Reserve Backing</p>
                <p className="leading-relaxed">Jowih Credits shall be 100% asset-backed. The reserve shall be held in trust, subject to the Asset Lock (Article XXV) and quarterly audited. The reserve composition shall be:</p>
                <p className="leading-relaxed">(a) High-Liquid Reserves (30-50% of total backing)</p>
                <p className="leading-relaxed">Consisting of:</p>
                <p className="leading-relaxed">(i) Cash in major currencies;</p>
                <p className="leading-relaxed">(ii) Gold bullion;</p>
                <p className="leading-relaxed">(iii) Short-term government securities;</p>
                <p className="leading-relaxed">(iv) Such other highly liquid assets as the Combined Trusts Board and Steward President may designate.</p>
                <p className="leading-relaxed">(b) Foundation Assets (50-70% of total backing)</p>
                <p className="leading-relaxed">Consisting of:</p>
                <p className="leading-relaxed">(i) Current and future revenue streams and services;</p>
                <p className="leading-relaxed">(ii) Foundation-owned companies, Data Centers, R&amp;D, and spin-off companies;</p>
                <p className="leading-relaxed">(iii) Real estate and New Dawn City properties;</p>
                <p className="leading-relaxed">(iv) ADFA projects: Foundation-owned or Joint projects (receivables and future cash flows);</p>
                <p className="leading-relaxed">(v) Such other high-value assets as the Combined Trusts Board and Steward President may designate.</p>
                <p className="leading-relaxed">(c) Allocation Adjustment</p>
                <p className="leading-relaxed">The Combined Trusts Board through the company responsible for Jowih Credits may adjust the allocation within the ranges specified in (a) and (b) based on market conditions and risk assessment, provided that:</p>
                <p className="leading-relaxed">(i) High-Liquid Reserves shall never fall below 30% of total backing;</p>
                <p className="leading-relaxed">(ii) Foundation Assets shall never exceed 70% of total backing;</p>
                <p className="leading-relaxed">(iii) The reserve remains over-collateralized at a minimum ratio of 100% of Credits in circulation at all times.</p>
                <p className="leading-relaxed">(d) Audit and Transparency</p>
                <p className="leading-relaxed">The IAG Departments shall audit the reserve quarterly. Audit results shall be published on the Public Dashboard (Article XXXV) within 30 days. Annual auditing may be done by the External Auditor Firm.</p>
                <p className="leading-relaxed font-semibold">59.5 Jowih COS Hybrid Wallet and PSPS Partnership &amp; Integrations</p>
                <p className="leading-relaxed">(a) The Jowih Wallet shall partner with or integrate user PSPS accounts (mobile money, bank accounts, card networks, fintech wallets) into a single interface for respective countries to provide payment services in the Jowih COS and other PSPS-specific services to a broader user base. PSPSs shall retain full ownership of their customer relationships and data.</p>
                <p className="leading-relaxed">(b) For local transactions within a country in the Jowih COS:</p>
                <p className="leading-relaxed">(i) The default payment method shall be the user&apos;s local currency via their chosen PSPS mini-wallets;</p>
                <p className="leading-relaxed">(ii) The Foundation through partners shall not force Credits for domestic transactions.</p>
                <p className="leading-relaxed">(iii) When a user selects pay with Credits for domestic spending, Credits convert instantly to local currency in the background through the partner.</p>
                <p className="leading-relaxed">(c) For cross-border and global transactions:</p>
                <p className="leading-relaxed">(i) The preferred payment method in the Jowih COS shall be Jowih Credits to facilitate faster cross-border payments;</p>
                <p className="leading-relaxed">(ii) Users may choose alternative local and international currencies too directly.</p>
                <p className="leading-relaxed">(d) The Foundation shall partner with PSPSs, banks, card networks, and fintech platforms to enable:</p>
                <p className="leading-relaxed">(i) Users to convert and spend Jowih Credits on bills, merchants, and external apps through existing partner infrastructure;</p>
                <p className="leading-relaxed">(ii) PSPSs, banks, card networks, and fintech platforms to integrate Jowih Credits Wallet APIs and earn fees, creating new additional revenue streams and settlements;</p>
                <p className="leading-relaxed">(iii) Partners handle the conversion of Credits to local currency at the point of domestic spending. This is their core role in the ecosystem.</p>
                <p className="leading-relaxed">(e) The Foundation&apos;s Jowih COS company shall never compete with existing or future PSPSs, banks, card networks, or fintech platforms. The Foundation shall partner with them, driving new customers and new revenue to PSPSs, banks, card networks, and fintech platforms while extending Credit utility. This does not limit the Foundation from owning a bank.</p>
                <p className="leading-relaxed">Therefore, the Jowih wallet shall never be redesigned in a way to do away with PSPSs, banks, card networks, and fintech platforms handling respective wallets they connect to the Jowih COS for user selections as primary wallets, as they will remain the default face of the Jowih Wallet and the backbone for transactions.</p>
                <p className="leading-relaxed">(f) The Foundation shall not operate any fiat on-ramp or off-ramp services in any market. The Foundation&apos;s role is limited to the bridge layer (issuance, holding, and transfer of Credits). All conversions - retail and wholesale - are handled exclusively by partners. Partners with capacity may handle wholesale conversions. Partners may also route flows to Tier 1 institutions at their discretion. This provision ensures partners remain the default face of the Jowih Wallet and the backbone for all conversions.</p>
                <p className="leading-relaxed font-semibold">59.6 Operational Model</p>
                <p className="leading-relaxed">(a) The Foundation shall pay all salaries, stipends, and local obligations in the respective national currencies to boost local currency circulation.</p>
                <p className="leading-relaxed">(b) The Foundation may pay contracts, ADFA disbursements, government partnerships, and investments in Jowih Credits.</p>
                <p className="leading-relaxed">(c) Inside New Dawn City, residents and businesses may use local currency, but Credits are presumed for efficiency and stability. For domestic spending, Credits convert instantly to local currency in the background through partners.</p>
                <p className="leading-relaxed">(d) Outside the Jowih Ecosystem, individuals, governments, and companies may voluntarily convert national currency into Jowih Credits via Partner Channels.</p>
                <p className="leading-relaxed">(e) Dual-Mode Operation:</p>
                <p className="leading-relaxed">(i) Auto-Conversion Mode (Default): This is the default mode for all transactions. When a user sends funds from one currency to another, the system automatically converts to Jowih Credits for transfer and then to the recipient&apos;s chosen currency upon receipt. For domestic spending, Credits convert instantly to local currency in the background. This mode is designed for instant settlement, cross-border trade, remittances, bill payments, and everyday spending involving different currencies. Credits are minted and burned in real time. Reserve requirements are minimal.</p>
                <p className="leading-relaxed">(ii) Holding Mode (Optional): Users may choose to hold Jowih Credits in their wallets temporarily for six months. Credits are fully asset-backed and may be used for future payments, savings, or strategic purposes. The Foundation may utilize the float generated by held Credits for strategic investments, with all returns flowing to the Mission Fund or Treasury. Holding is optional, users are not required to hold Credits.</p>
                <p className="leading-relaxed">(f) User Choice and Flexibility:</p>
                <p className="leading-relaxed">(i) Auto-Conversion is the default mode for all users.</p>
                <p className="leading-relaxed">(ii) Holding Mode is optional - users may choose to hold Credits, but are not required to.</p>
                <p className="leading-relaxed">(iii) Users may switch between modes at any time.</p>
                <p className="leading-relaxed">(iv) No user is compelled to hold Credits.</p>
                <p className="leading-relaxed">(v) For domestic spending, Credits always convert instantly to local currency in the background, regardless of mode.</p>
                <p className="leading-relaxed">(g) Government and Partner Integration: The Foundation shall partner with PSPSs, banks, card networks, fintech platforms, and governments to enable seamless conversion between local currencies and Credits. Governments receive their tax share on all on-ramp and off-ramp transactions. PSPSs, banks, and fintech platforms earn fees on conversions and local transactions.</p>
                <p className="leading-relaxed font-semibold">59.7 Fees, Government Tax Share, and Market Structure</p>
                <p className="leading-relaxed">The government tax share (both foreign governments overseas and local governments in Africa) recognizes that on-ramp and off-ramp transactions occur within each state&apos;s sovereign jurisdiction and contributes to the public revenue pool that funds development - a goal shared with the Foundation.</p>
                <p className="leading-relaxed">(a) Market Structure - Partner-Only Execution</p>
                <p className="leading-relaxed">Jowih Credits operates through a partner-only execution model:</p>
                <p className="leading-relaxed">(i) The Foundation does not operate any exchange or conversion service. Partners handle ALL conversions - retail and wholesale.</p>
                <p className="leading-relaxed">(ii) Wholesale Channel: Serves governments (treasuries), commercial banks, corporations, airports, airlines, institutional investors, and large partners with capacity. Partners set their own pricing based on the Foundation base rates.</p>
                <p className="leading-relaxed">(iii) Retail Channel: Serves individuals, SMEs, and everyday users through PSPSs (mobile money, banks, card networks, fintech platforms). Partners apply their margin on top of the Foundation base rates. There is no minimum transaction.</p>
                <p className="leading-relaxed">(iv) Partners as executioners do not hold Jowih Credits. They are conversion rails only. Their role is to convert Credits to local currency for domestic spending. But they can hold credits as clients in their partner wallet for their treasuries, investment and any other needs they have.</p>
                <p className="leading-relaxed">(v) Credits never enter the domestic economy. They are a bridge layer only. For domestic spending, Credits convert instantly to local currency through partners.</p>
                <p className="leading-relaxed">(b) Foundation Base Rates</p>
                <p className="leading-relaxed">(i) The Foundation does not charge any transaction fee on conversions. Partners set their own pricing based on the government tax base and their own margins.</p>
                <p className="leading-relaxed">(ii) The base rates for conversions are as follows:</p>
                <p className="leading-relaxed">(A) For wallet-to-wallet Jowih Credit transfers: 0% to 1% partner transaction fee. No government tax, as there is no realization event.</p>
                <p className="leading-relaxed">(B) For on-ramp and off-ramp conversions: 0% Foundation fee and 0.25% to 0.30% government tax, totaling 0.25% to 0.30% base.</p>
                <p className="leading-relaxed">(C) For auto-conversions involving local transaction using pay with credits method directly: 0% Foundation fee, 0.1% to 1% partner fee, and 0.1% to 0.30% government tax.</p>
                <p className="leading-relaxed">(iii) The base rates shall be published in the Operational Framework and may be adjusted by the Combined Trusts Board in accordance with the amendment requirements of this Article.</p>
                <p className="leading-relaxed">(c) Partner Margins</p>
                <p className="leading-relaxed">(i) Partners (PSPSs, banks, card networks, fintech platforms) may add a margin on top of the government tax base for conversions handled through their channels.</p>
                <p className="leading-relaxed">(ii) The maximum partner margin shall be 1.5% for on-ramp/off-ramp conversions and 0.1% to 1% for local transactions.</p>
                <p className="leading-relaxed">(iii) Partners may compete on margins. Partners earn the margin they add. Partners may decide to set tiers on transaction and apply different margins as per the market condition.</p>
                <p className="leading-relaxed">(d) Government Tax Remittance</p>
                <p className="leading-relaxed">(i) The government tax of 0.10%-0.30% on local transaction from credits direct or 0.25% to 0.30% on ramps is applied to the base rate.</p>
                <p className="leading-relaxed">(ii) The tax is withheld at the point of transaction by the partner.</p>
                <p className="leading-relaxed">(iii) The Foundation remits all government taxes to respective governments monthly, or immediately where infrastructure exists.</p>
                <p className="leading-relaxed">(iv) Partners are not responsible for tax remittance. The Foundation handles it.</p>
                <p className="leading-relaxed">(v) Governments receive auditable reports of all taxable transactions within their jurisdiction.</p>
                <p className="leading-relaxed">(e) Foundation Revenue Model</p>
                <p className="leading-relaxed">(i) The Foundation does not earn from transaction fees.</p>
                <p className="leading-relaxed">(ii) The Foundation&apos;s primary economic model is the Treasury Engine - holding Credits and investing the float generated by held Credits in mission-aligned projects.</p>
                <p className="leading-relaxed">(iii) All returns from float investments flow to the Mission Fund.</p>
                <p className="leading-relaxed font-semibold">59.8 Holding and Conversion</p>
                <p className="leading-relaxed">(a) Jowih Credits earn no interest, yield, or dividends.</p>
                <p className="leading-relaxed">(b) Who Holds Credits:</p>
                <p className="leading-relaxed">(i) Jowih Credits are held in the Foundation Treasury as reserve backing and liquidity provision;</p>
                <p className="leading-relaxed">(ii) Individual users may hold Credits in their Jowih credit wallets for future use maximum six months;</p>
                <p className="leading-relaxed">(iii) Partners, Institutions, governments, and ADFA contractors may hold Credits too with agreements in case of extension;</p>
                <p className="leading-relaxed">(iv) Partners (PSPSs, banks, card networks, fintech platforms) connect to user&apos;s Jowih wallet through APIs. They are conversion rails only. Their role is to convert Credits to local currency for domestic spending.</p>
                <p className="leading-relaxed">(v) Holding Credits is optional. Auto-Conversion is the default.</p>
                <p className="leading-relaxed">(c) Recipients of Jowih Credits may hold them for a maximum of six (6) months. After six months, the holder is mandated to convert to local currency for domestic needs, with a grace period of one week for anyone who may have forgotten to do so.</p>
                <p className="leading-relaxed">(d) Premium Wallets dedicated between the Foundation and hospitals or Foundation and Country Pots under the AHF framework shall have a time limit of seven (7) days after the funds have been received.</p>
                <p className="leading-relaxed">(e) Conversion to local or foreign currency shall be available almost instantly through the Jowih Credits blockchain wallet in Partner Channels.</p>
                <p className="leading-relaxed">(f) The Foundation may extend the holding period for specific categories of holders (e.g., governments, commercial banks, institutional investors, ADFA contractors) by agreement, subject to anti-speculation safeguards.</p>
                <p className="leading-relaxed">(g) Jowih Credits are not an investment vehicle. The Foundation shall not market them as such.</p>
                <p className="leading-relaxed font-semibold">59.9 AfCFTA and Continental Trade</p>
                <p className="leading-relaxed">Jowih Credits are specifically designed to accelerate the African Continental Free Trade Area (AfCFTA) by:</p>
                <p className="leading-relaxed">(a) Providing a stable, low-cost, instant settlement layer for intra-African trade.</p>
                <p className="leading-relaxed">(b) Enabling small and medium-sized enterprises (SMEs) to participate in cross-border trade much easier.</p>
                <p className="leading-relaxed">(c) Reducing the cost of cross-border payments and remittances from current levels to under 3%.</p>
                <p className="leading-relaxed">(d) Complementing the AfCFTA Payment and Settlement System by providing a digital bridge between the 54 national currencies of AfCFTA member states.</p>
                <p className="leading-relaxed">(e) Supporting the AU&apos;s Agenda 2063 goal of a fully integrated, prosperous, and peaceful Africa.</p>
                <p className="leading-relaxed font-semibold">59.10 Data Sovereignty and Protection</p>
                <p className="leading-relaxed">(a) Cross-border settlement data shall be anonymized and aggregated.</p>
                <p className="leading-relaxed">(b) The Foundation shall not monetize or share individual transaction data without explicit user consent.</p>
                <p className="leading-relaxed">(c) Partnered PSPSs, banks, card networks, and fintech platforms retain full ownership of their customer data.</p>
                <p className="leading-relaxed font-semibold">59.11 Credit Valuation Framework</p>
                <p className="leading-relaxed">59.11.1 Valuation Principle</p>
                <p className="leading-relaxed">Jowih Credits (&quot;Credits&quot;) shall operate under a structured valuation framework designed to ensure:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Stability in everyday use</li>
                  <li>Global interoperability</li>
                  <li>Long-term monetary resilience</li>
                </ul>
                <p className="leading-relaxed">The valuation framework shall distinguish between:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Operational pricing reference, and</li>
                  <li>Underlying reserve backing</li>
                </ul>
                <p className="leading-relaxed">59.11.2 Primary Reference (Normal Conditions)</p>
                <p className="leading-relaxed">Under normal market conditions, Credits shall be valued using a United States Dollar (USD) reference:</p>
                <p className="leading-relaxed font-semibold">1 Jowih Credit = 1 USD equivalent (for pricing and transactional purposes).</p>
                <p className="leading-relaxed">This reference shall:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Serve as a unit of account only</li>
                  <li>Facilitate ease of trade, settlement, and adoption</li>
                  <li>Not constitute a dependency on USD for underlying value</li>
                </ul>
                <p className="leading-relaxed font-semibold">59.11.3 Independence from Currency Anchors</p>
                <p className="leading-relaxed">Notwithstanding the USD reference:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Credits shall remain fully asset-backed in accordance with Article 59.4</li>
                  <li>The reserve shall be diversified across currencies, commodities, and real assets</li>
                  <li>No single currency shall define or limit the intrinsic value of Credits</li>
                </ul>
                <p className="leading-relaxed">59.11.4 Contingency Valuation Framework (Re-anchoring Mechanism)</p>
                <p className="leading-relaxed">To ensure continuity under conditions of monetary instability, the system shall incorporate a Contingency Valuation Framework.</p>
                <p className="leading-relaxed">Under qualifying conditions, the valuation of Credits may transition from the USD reference to a Basket Reference Unit (BRU).</p>
                <p className="leading-relaxed">59.11.5 Basket Reference Unit (BRU)</p>
                <p className="leading-relaxed">The Basket Reference Unit shall represent a diversified valuation standard, which may include but is not limited to:</p>
                <p className="leading-relaxed">(a) Percentages portion in diversified major currencies</p>
                <p className="leading-relaxed">(b) Percentage portion in Gold or equivalent precious metals</p>
                <p className="leading-relaxed">(c) Percentage portion in Asset Index, representing real-economy assets and productive value</p>
                <p className="leading-relaxed">The composition, methodology, and periodic adjustments of the BRU shall be determined by the Combined Trusts Board and Steward President, maintained in the Private Annex, and subject to audit and disclosure requirements.</p>
                <p className="leading-relaxed">59.11.6 Activation Conditions</p>
                <p className="leading-relaxed">The Contingency Valuation Framework may be activated upon the occurrence of defined market stress conditions, including but not limited to:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Sustained instability or loss of reliability in USD valuation</li>
                  <li>Severe disruption in foreign exchange markets</li>
                  <li>Significant divergence among major reserve assets</li>
                  <li>Systemic monetary or liquidity crises affecting pricing mechanisms</li>
                </ul>
                <p className="leading-relaxed">Such conditions shall be:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Based on objective and verifiable indicators, and</li>
                  <li>Evaluated using transparent and auditable data sources</li>
                </ul>
                <p className="leading-relaxed">59.11.7 Governance and Authorization</p>
                <p className="leading-relaxed">Activation of the BRU framework shall follow a structured governance process:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Detection of qualifying conditions through system monitoring</li>
                  <li>Review and recommendation by the Combined Trusts Board</li>
                  <li>Final authorization by the Steward President</li>
                </ul>
                <p className="leading-relaxed">Emergency provisions may allow expedited activation where necessary to preserve system integrity.</p>
                <p className="leading-relaxed font-semibold">59.11.8 Continuity and Non-Devaluation</p>
                <p className="leading-relaxed">Transition to the Basket Reference Unit shall:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Constitute a change in valuation reference only</li>
                  <li>Not result in loss of value for Credit holders</li>
                  <li>Not affect balances, contracts, or obligations</li>
                </ul>
                <p className="leading-relaxed">All Credits shall continue to be fully backed and over-collateralized in accordance with Article 59.4.</p>
                <p className="leading-relaxed font-semibold">59.11.9 Transparency and Disclosure</p>
                <p className="leading-relaxed">Upon activation:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>The BRU composition and methodology shall be publicly disclosed</li>
                  <li>Valuation updates shall be communicated clearly to all stakeholders</li>
                  <li>Ongoing reporting shall ensure transparency and confidence</li>
                </ul>
                <p className="leading-relaxed font-semibold">59.11.10 Reversion to Primary Reference</p>
                <p className="leading-relaxed">The system may revert to USD-based valuation upon stabilization of market conditions, subject to the same governance, verification, and transparency standards.</p>
                <p className="leading-relaxed font-semibold">59.12 FX Rate Integrity, Settlement Architecture &amp; System Boundaries</p>
                <p className="leading-relaxed font-semibold">59.12.1 Purpose</p>
                <p className="leading-relaxed">This Article establishes the principles governing:</p>
                <p className="leading-relaxed">(a) Foreign exchange (FX) rate integrity</p>
                <p className="leading-relaxed">(b) Transaction execution and rate protection</p>
                <p className="leading-relaxed">(c) Blockchain-based settlement</p>
                <p className="leading-relaxed">(d) System boundaries, controls, and security</p>
                <p className="leading-relaxed">(e) Alignment with global financial systems</p>
                <p className="leading-relaxed">The objective is to ensure stability, transparency, and non-disruptive integration with existing monetary and FX frameworks.</p>
                <p className="leading-relaxed font-semibold">59.12.2 Real-Time Market Alignment</p>
                <p className="leading-relaxed">(a) All currency conversions within the system shall be executed using real-time market exchange rates sourced from verified liquidity providers.</p>
                <p className="leading-relaxed">(b) The system shall not:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Create synthetic exchange rates</li>
                  <li>Fix or administratively determine currency values</li>
                  <li>Operate parallel or alternative pricing systems</li>
                </ul>
                <p className="leading-relaxed">(c) All pricing shall remain fully aligned with:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Licensed financial institutions</li>
                  <li>FX liquidity providers</li>
                  <li>National and international currency markets</li>
                </ul>
                <p className="leading-relaxed font-semibold">59.12.3 Transaction Rate Lock Mechanism</p>
                <p className="leading-relaxed">(a) Upon initiation of any transaction, the applicable FX rate shall be immediately locked.</p>
                <p className="leading-relaxed">(b) The locked rate shall remain valid for a defined execution window, not exceeding sixty (60) seconds unless otherwise specified by system parameters.</p>
                <p className="leading-relaxed">(c) Once locked:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>The transaction shall be executed at the locked rate</li>
                  <li>Subsequent market fluctuations shall not affect the transaction outcome</li>
                </ul>
                <p className="leading-relaxed">(d) Where a transaction is not completed within the validity window:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>The quote shall expire automatically</li>
                  <li>A new rate shall be fetched</li>
                  <li>User reconfirmation shall be required</li>
                </ul>
                <p className="leading-relaxed font-semibold">59.12.4 Handling of FX Rate Fluctuations</p>
                <p className="leading-relaxed">(a) FX rate changes shall apply only to newly initiated transactions.</p>
                <p className="leading-relaxed">(b) Transactions in progress shall remain protected under the rate lock mechanism.</p>
                <p className="leading-relaxed">(c) The system shall ensure that:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Volatility is isolated from users during execution</li>
                  <li>Pricing remains predictable and transparent</li>
                </ul>
                <p className="leading-relaxed font-semibold">59.12.5 Internal FX Consistency and Integrity Controls</p>
                <p className="leading-relaxed">(a) The system shall operate a unified FX rate engine across all corridors.</p>
                <p className="leading-relaxed">(b) All conversion legs, including:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Local Currency to Credit (Entry)</li>
                  <li>Credit to Local Currency (Exit)</li>
                </ul>
                <p className="leading-relaxed">shall remain synchronized and consistent.</p>
                <p className="leading-relaxed">(c) The system shall prevent:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Rate mismatches between transaction legs</li>
                  <li>Timing-based arbitrage opportunities</li>
                  <li>Financial losses to liquidity partners arising from inconsistencies</li>
                </ul>
                <p className="leading-relaxed font-semibold">59.12.6 Blockchain Settlement Layer in Governance OS</p>
                <p className="leading-relaxed">(a) The system shall utilize blockchain infrastructure strictly as a settlement layer.</p>
                <p className="leading-relaxed">(b) Blockchain usage shall be limited to:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Transaction finality</li>
                  <li>Record integrity and immutability</li>
                  <li>Reduction of counterparty risk</li>
                </ul>
                <p className="leading-relaxed">(c) The system shall not:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Use blockchain for speculative pricing</li>
                  <li>Derive exchange rates from blockchain markets</li>
                </ul>
                <p className="leading-relaxed">(d) All transactions shall achieve near-instant settlement finality, subject to network conditions.</p>
                <p className="leading-relaxed font-semibold">59.12.7 System Boundaries and Operational Role</p>
                <p className="leading-relaxed">(a) The Foundation shall operate exclusively at the settlement and coordination layer.</p>
                <p className="leading-relaxed">(b) The Foundation shall not:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Participate in live FX trading</li>
                  <li>Act as a market maker</li>
                  <li>Set or influence exchange rates</li>
                </ul>
                <p className="leading-relaxed">(c) All FX pricing and liquidity provision shall remain the responsibility of external licensed partners.</p>
                <p className="leading-relaxed font-semibold">59.12.8 Wallet, Access and Closed-Loop Controls</p>
                <p className="leading-relaxed">(a) All system wallets shall be tied to verified on-ramp and off-ramp partners.</p>
                <p className="leading-relaxed">(b) The system shall operate as a closed-loop financial environment.</p>
                <p className="leading-relaxed">(c) The architecture shall prevent:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Arbitrage through VPN or location spoofing</li>
                  <li>Unauthorized access to regional pricing differences</li>
                  <li>External bypass of the $200m limit FX under credits both in currency auto-conversion or wallet to wallet involving change in currency bases and regulatory controls</li>
                </ul>
                <p className="leading-relaxed">(d) Access and participation shall be subject to:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Identity verification requirements</li>
                  <li>Partner-level compliance enforcement</li>
                </ul>
                <p className="leading-relaxed font-semibold">59.12.9 FX Market Compatibility</p>
                <p className="leading-relaxed">(a) The system shall operate within existing FX markets, not outside them. INcreasing currency circulation.</p>
                <p className="leading-relaxed">(b) Credit-Routed FX is designed to complement traditional FX by providing a faster, cheaper, and more accessible alternative for transactions under $200M.</p>
                <p className="leading-relaxed">(c) The system shall preserve the role of:</p>
                <p className="leading-relaxed">Major global currencies, including USD</p>
                <p className="leading-relaxed">Institutional liquidity providers</p>
                <p className="leading-relaxed">National monetary systems</p>
                <p className="leading-relaxed">(d) The system shall not interfere with:</p>
                <p className="leading-relaxed">Macro-level FX pricing</p>
                <p className="leading-relaxed">Central bank policy mechanisms</p>
                <p className="leading-relaxed">International financial stability</p>
                <p className="leading-relaxed">(e) It shall seek to enable faster, stable and cheaper transactions for the lower FX market where there is friction.</p>
                <p className="leading-relaxed">(f) Transactions exceeding $200M shall be routed through traditional FX markets and institutional liquidity channels.</p>
                <p className="leading-relaxed font-semibold">59.12.10 Transaction Scope Limitation</p>
                <p className="leading-relaxed">(a) The system shall process transactions below a defined threshold of Two Hundred Million United States Dollars (USD 200,000,000) equivalent.</p>
                <p className="leading-relaxed">(b) Transactions exceeding this threshold shall be routed through:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Traditional FX markets</li>
                  <li>Institutional liquidity channels</li>
                </ul>
                <p className="leading-relaxed">(c) This limitation ensures:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Preservation of macroeconomic stability</li>
                  <li>Clear separation between operational layers</li>
                </ul>
                <p className="leading-relaxed font-semibold">59.12.11 Economic and Systemic Impact</p>
                <p className="leading-relaxed">The architecture established under this Article shall:</p>
                <p className="leading-relaxed">(a) Accelerate intra-African currency movement</p>
                <p className="leading-relaxed">(b) Increase circulation of USD and major currencies within African markets</p>
                <p className="leading-relaxed">(c) Reduce friction in low-to-mid value cross-border transactions</p>
                <p className="leading-relaxed">(d) Enhance financial accessibility and efficiency</p>
                <p className="leading-relaxed font-semibold">59.12.12 Principle of Non-Disruption</p>
                <p className="leading-relaxed">(a) The system shall function as an efficiency layer, not a replacement for existing financial systems.</p>
                <p className="leading-relaxed">(b) It shall:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Reinforce global financial structures</li>
                  <li>Maintain compatibility with international markets</li>
                  <li>Avoid distortion of currency valuation mechanisms</li>
                </ul>
                <p className="leading-relaxed font-semibold">59.13 Liquidity, Partner Roles &amp; Spread Governance</p>
                <p className="leading-relaxed font-semibold">59.13.1 Purpose</p>
                <p className="leading-relaxed">This Article establishes the framework governing:</p>
                <p className="leading-relaxed">(a) Liquidity provision within the system</p>
                <p className="leading-relaxed">(b) Roles and responsibilities of participating partners</p>
                <p className="leading-relaxed">(c) Spread application and margin distribution</p>
                <p className="leading-relaxed">(d) Risk allocation and sustainability of transaction flows</p>
                <p className="leading-relaxed">The objective is to ensure efficient liquidity access, fair partner participation, and stable system-wide economics.</p>
                <p className="leading-relaxed font-semibold">59.13.2 Liquidity Provision Framework</p>
                <p className="leading-relaxed">(a) All transaction liquidity shall be provided by licensed and verified external partners, including:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Financial institutions</li>
                  <li>Payment service providers</li>
                  <li>FX liquidity providers</li>
                </ul>
                <p className="leading-relaxed">(b) The system shall not act as a primary liquidity provider but shall:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Coordinate access to partner liquidity</li>
                  <li>Route transactions efficiently across available pools</li>
                </ul>
                <p className="leading-relaxed">(c) Liquidity shall be maintained across:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Local currency corridors (e.g., NGN, KES, ZAR)</li>
                  <li>Major global currencies (e.g., USD, EUR)</li>
                </ul>
                <p className="leading-relaxed font-semibold">59.13.3 Role of Liquidity Partners</p>
                <p className="leading-relaxed">(a) Liquidity partners shall be responsible for:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Providing executable FX rates</li>
                  <li>Supporting on-ramp and off-ramp conversions</li>
                  <li>Absorbing short-term FX exposure during transaction execution</li>
                </ul>
                <p className="leading-relaxed">(b) Partners shall operate under:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Predefined service-level agreements (SLAs)</li>
                  <li>Compliance with regulatory and licensing requirements</li>
                </ul>
                <p className="leading-relaxed">(c) Partners shall not:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Manipulate pricing outside market-aligned ranges</li>
                  <li>Exploit timing or system inefficiencies</li>
                </ul>
                <p className="leading-relaxed font-semibold">59.13.4 Spread and Margin Structure</p>
                <p className="leading-relaxed">(a) Each transaction shall include a spread component, consisting of:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Government tax (0.25% to 0.30% for on/off-ramp, 0.10% to 0.30% for local transactions)</li>
                  <li>Partner margin, determined by liquidity providers</li>
                </ul>
                <p className="leading-relaxed">(b) The total transaction cost shall remain:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Competitive with or lower than traditional cross-border alternatives</li>
                  <li>Transparent and disclosed prior to transaction confirmation</li>
                </ul>
                <p className="leading-relaxed">(c) The Foundation does not charge any transaction fees.</p>
                <p className="leading-relaxed font-semibold">59.13.5 Spread Governance Principles</p>
                <p className="leading-relaxed">(a) Spread application shall follow these principles:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Transparency - all costs visible to users before execution</li>
                  <li>Fairness - equitable distribution between partners and government</li>
                  <li>Market alignment - spreads reflect real liquidity conditions</li>
                </ul>
                <p className="leading-relaxed">(b) A maximum spread threshold may be defined to:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Prevent excessive pricing</li>
                  <li>Protect end users</li>
                  <li>Maintain competitiveness</li>
                </ul>
                <p className="leading-relaxed">(c) Partner margins shall remain flexible within controlled boundaries to:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Encourage participation</li>
                  <li>Reflect corridor-specific liquidity conditions</li>
                </ul>
                <p className="leading-relaxed font-semibold">59.13.6 Internal Pricing Consistency</p>
                <p className="leading-relaxed">(a) The system shall enforce uniform pricing logic across all transaction legs.</p>
                <p className="leading-relaxed">(b) Entry and exit conversions shall be:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Synchronized</li>
                  <li>Derived from the same rate source and timing</li>
                </ul>
                <p className="leading-relaxed">(c) This prevents:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Internal arbitrage</li>
                  <li>Pricing discrepancies across corridors</li>
                  <li>Unintended financial losses</li>
                </ul>
                <p className="leading-relaxed font-semibold">59.13.7 Risk Allocation</p>
                <p className="leading-relaxed">(a) Short-term FX exposure arising from rate locking shall be borne by:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Liquidity partners</li>
                  <li>Supported by spread margins and execution speed</li>
                </ul>
                <p className="leading-relaxed">(b) The system shall minimize risk exposure through:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Near-instant transaction settlement</li>
                  <li>Efficient routing and netting mechanisms</li>
                </ul>
                <p className="leading-relaxed">(c) Users shall not bear intra-transaction FX risk once a rate is locked.</p>
                <p className="leading-relaxed font-semibold">59.13.8 Incentive Alignment</p>
                <p className="leading-relaxed">(a) The system shall ensure that:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Liquidity partners are economically incentivized to participate</li>
                  <li>Margins remain sufficient to sustain liquidity provision</li>
                </ul>
                <p className="leading-relaxed">(b) Incentives shall promote:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>High availability of liquidity</li>
                  <li>Competitive pricing</li>
                  <li>Reliable execution across corridors</li>
                </ul>
                <p className="leading-relaxed font-semibold">59.13.9 Liquidity Discipline and Limits</p>
                <p className="leading-relaxed">(a) Liquidity usage shall remain within defined operational limits, including:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Transaction size thresholds (as defined in Article 59.12)</li>
                  <li>Corridor-specific capacity constraints</li>
                </ul>
                <p className="leading-relaxed">(b) The system shall avoid:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Over-reliance on single liquidity sources</li>
                  <li>Concentration risk</li>
                </ul>
                <p className="leading-relaxed">(c) Diversified liquidity sourcing shall be maintained at all times.</p>
                <p className="leading-relaxed font-semibold">59.13.10 Netting and Flow Optimization</p>
                <p className="leading-relaxed">(a) The system may implement internal netting mechanisms to:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Offset opposing transaction flows</li>
                  <li>Reduce external FX demand</li>
                </ul>
                <p className="leading-relaxed">(b) Netting shall:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Improve efficiency</li>
                  <li>Lower liquidity costs</li>
                  <li>Reduce exposure for partners</li>
                </ul>
                <p className="leading-relaxed">(c) All netting operations shall remain consistent with:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Market-aligned pricing</li>
                  <li>Transparency and auditability requirements</li>
                </ul>
                <p className="leading-relaxed font-semibold">59.13.11 Economic Impact</p>
                <p className="leading-relaxed">The framework established under this Article shall:</p>
                <p className="leading-relaxed">(a) Enable sustainable liquidity across African and global corridors</p>
                <p className="leading-relaxed">(b) Strengthen participation of local financial institutions</p>
                <p className="leading-relaxed">(c) Reduce transaction costs through competitive spreads</p>
                <p className="leading-relaxed">(d) Support scalable growth of cross-border financial activity</p>
                <p className="leading-relaxed font-semibold">59.13.12 Interpretation</p>
                <p className="leading-relaxed">This Article shall be interpreted to ensure:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Sustainable liquidity provision</li>
                  <li>Fair and transparent pricing</li>
                  <li>Protection of all ecosystem participants</li>
                  <li>Long-term stability of the system</li>
                </ul>
                <p className="leading-relaxed font-semibold">59.14 Core Article Status</p>
                <p className="leading-relaxed">This Article shall be interpreted to uphold:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Transaction integrity</li>
                  <li>Market alignment</li>
                  <li>Partner protection</li>
                  <li>System security</li>
                  <li>Global financial compatibility</li>
                </ul>
                <p className="leading-relaxed">This Article LIX is designated as a Tier 1 Core Article under Article XIX.3.</p>
                <p className="leading-relaxed">No amendment may:</p>
                <p className="leading-relaxed">(a) Remove the asset-backing requirement, or change the transaction percentages for more profit;</p>
                <p className="leading-relaxed">(b) Introduce interest, yield, dividends, or speculative features;</p>
                <p className="leading-relaxed">(c) Alter the bridge-only, non-competing nature of Jowih Credits;</p>
                <p className="leading-relaxed">(d) Remove government revenue share on on-ramp and off-ramp conversions;</p>
                <p className="leading-relaxed">(e) Convert Jowih Credits into a security or investment vehicle;</p>
                <p className="leading-relaxed">(f) Eliminate IAG audit requirements;</p>
                <p className="leading-relaxed">(g) Permit listing on external speculative cryptocurrency exchanges;</p>
                <p className="leading-relaxed">(h) Reduce the reserve backing ratio below 100%;</p>
                <p className="leading-relaxed">(i) Force Credits for domestic transactions;</p>
                <p className="leading-relaxed">(j) Redesign Jowih Wallet in a way to do away with PSPs or banks as the default face;</p>
                <p className="leading-relaxed">(k) Allow partners as executioner to hold Credits as an asset rather than acting solely as conversion rails;</p>
                <p className="leading-relaxed">(l) Allow Credits to enter the domestic economy as a currency - Credits must always convert to local currency for domestic spending;</p>
                <p className="leading-relaxed">(m) Change Auto-Conversion from the default mode;</p>
                <p className="leading-relaxed">(n) Make Holding Credits mandatory - Holding must remain optional;</p>
                <p className="leading-relaxed">(o) Operate any fiat on-ramp or off-ramp service - the Foundation shall not operate any conversion service;</p>
                <p className="leading-relaxed">(p) Change the positioning of Jowih Credits from a complementary bridge that stimulates FX activity to a system that seeks to replace or compete with traditional FX markets;</p>
                <p className="leading-relaxed">(q) Pin credits backing to a single currency;</p>
                <p className="leading-relaxed">(r) Remove the need for BRU to value credits during crisis in the market;</p>
                <p className="leading-relaxed">(s) Remove the governance or triggers set herein.</p>
                <p className="leading-relaxed font-semibold">59.15 Severability</p>
                <p className="leading-relaxed">If any provision of this Article is held invalid, the remaining provisions shall remain in full force and effect. The Foundation shall seek to achieve the purpose of this Article through all lawful means.</p>
            </CollapsibleAccordionItem>

            <CollapsibleAccordionItem
              id="cb-02"
              number="02"
              title="Core Principle &amp; Strategic Positioning"
              summary="What Credits are - and are not - and the Dual-Engine flow model"
            >
                <p className="leading-relaxed font-semibold">JOWIH CREDITS</p>
                <p className="leading-relaxed font-semibold">CORE PRINCIPLE</p>
                <p className="leading-relaxed">&quot;Credits are a bridge - not a currency. They never enter the domestic economy. Auto-Conversion is default. Holding is optional. Partners convert. Foundation holds the bridge. Credits may be invisible to the customer (Credit-Routed FX), held as a balance (Holding Mode), or transferred directly (Wallet Transfer) - depending on the transaction mode. But they are never a parallel domestic currency.&quot;</p>
                <p className="leading-relaxed font-semibold">STRATEGIC POSITIONING</p>
                <p className="leading-relaxed">We specialize in the most active, daily, high-friction layer of global finance - and we make it move better. We create and aggregate high-frequency cross-border flows. Traditional FX settles what we create. Execution done by partners. Different roles. Same system.</p>
                <p className="leading-relaxed font-semibold">The Dual-Engine Model</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Engine</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">What It Does</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">How Partners Earn</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">How Foundation Earns</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Flow Engine</td>
                        <td className="p-3 align-top">Partners handle transactions - remittances, SME trade, platform payments</td>
                        <td className="p-3 align-top">Transaction fees (0% – 1.5%)</td>
                        <td className="p-3 align-top">❌ Does not earn from fees</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Treasury Engine</td>
                        <td className="p-3 align-top">Credits held in Foundation Treasury - governments, institutions, multiplayers hold because it&apos;s stable</td>
                        <td className="p-3 align-top">Float value + asset backing</td>
                        <td className="p-3 align-top">✅ Earns from float investments</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Wallet Transfers</td>
                        <td className="p-3 align-top">Partners handle wallet transfers</td>
                        <td className="p-3 align-top">0% – 1%</td>
                        <td className="p-3 align-top">❌ Does not earn from fees</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed">Foundation Revenue Model: The Foundation does not earn from transaction fees. Its primary economic model is the Treasury Engine - holding Credits and investing the float generated by held Credits in mission-aligned projects, with all returns flowing to the Mission Fund.</p>
                <p className="leading-relaxed font-semibold">Our Focus - Flow Creation</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">What We Help Handle</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">What Tier 1 Partners Handle (larger FX market)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Remittances</td>
                        <td className="p-3 align-top">Ultra-large sovereign flows</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">SME trade</td>
                        <td className="p-3 align-top">Central bank-level liquidity</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Cross-border payments</td>
                        <td className="p-3 align-top">Trillion-scale settlements</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Digital platform payments</td>
                        <td className="p-3 align-top">Deep FX liquidity provisioning</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Informal → formal flows</td>
                        <td className="p-3 align-top">Complex derivatives and hedging</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">The Jowih Credits and Traditional FX Market Scale Boundary</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Layer</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Handled By</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Typical Size</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Frequency</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Role</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Ultra-Large / Sovereign</td>
                        <td className="p-3 align-top">Tier 1 Partners - FX Market (Banks, FX, Hedge Funds)</td>
                        <td className="p-3 align-top">$100M+</td>
                        <td className="p-3 align-top">Low</td>
                        <td className="p-3 align-top">Settlement anchors</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Wholesale</td>
                        <td className="p-3 align-top">Large Partners (with capacity)</td>
                        <td className="p-3 align-top">$1M - $200M (cap for Jowih Credits FX-classified settlements per transaction)</td>
                        <td className="p-3 align-top">Medium</td>
                        <td className="p-3 align-top">Wholesale execution</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Retail / SME</td>
                        <td className="p-3 align-top">Partner Channels</td>
                        <td className="p-3 align-top">No minimum</td>
                        <td className="p-3 align-top">High</td>
                        <td className="p-3 align-top">Flow engine</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed">Clarification: The $200M cap applies only to FX-classified wallet transfers (different currency bases). Same-currency wallet transfers are uncapped. Transactions exceeding the cap may be split into multiple compliant sizes or routed to Tier 1 partners.</p>
            </CollapsibleAccordionItem>

            <CollapsibleAccordionItem
              id="cb-03"
              number="03"
              title="The Three Wallets &amp; Where Credits Are Held"
              summary="Partner, ecosystem and user wallet architecture"
            >
                <p className="leading-relaxed font-semibold">THE THREE JOWIH CREDIT WALLETS</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Wallet</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Owner</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">User Wallet</td>
                        <td className="p-3 align-top">User</td>
                        <td className="p-3 align-top">Holds user&apos;s Credits. Integrated into partner system but owned by user.</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Partner Wallet</td>
                        <td className="p-3 align-top">Partner</td>
                        <td className="p-3 align-top">Holds partner&apos;s Credits (if they buy Credits for their own treasury, investment, or settlement).</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Foundation Treasury</td>
                        <td className="p-3 align-top">Foundation</td>
                        <td className="p-3 align-top">Reserve backing. Liquidity provision. Dual-engine treasury layer.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">2. WHERE CREDITS ARE HELD</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Holder</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Hold Credits?</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Why / How</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">User</td>
                        <td className="p-3 align-top">✅ Yes</td>
                        <td className="p-3 align-top">In their Jowih wallet (integrated into partner app or Super App PSPs)</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Partner (as Rail)</td>
                        <td className="p-3 align-top">❌ No</td>
                        <td className="p-3 align-top">They do NOT hold user Credits. They are an execution rail.</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Partner (as Client)</td>
                        <td className="p-3 align-top">✅ Yes</td>
                        <td className="p-3 align-top">Holds Credits in their own Jowih wallet after buying Credits</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Institution/Corporate</td>
                        <td className="p-3 align-top">✅ Yes</td>
                        <td className="p-3 align-top">Holds Credits in their Jowih wallet accounts after buying Credits</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Foundation Treasury</td>
                        <td className="p-3 align-top">✅ Yes</td>
                        <td className="p-3 align-top">Reserve backing. Liquidity provision. Stable store of value for governments, institutions, and multiplayers.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed">Key Distinction:</p>
                <p className="leading-relaxed">Partner as Rail = Facilitates conversion. Does NOT hold Credits.</p>
                <p className="leading-relaxed">Partner as Client = Buys Credits for own use. HOLDS Credits in their own partner wallet.</p>
            </CollapsibleAccordionItem>

            <CollapsibleAccordionItem
              id="cb-04"
              number="04"
              title="Transaction Modes"
              summary="Auto-convert and holding modes at a glance"
            >
                <p className="leading-relaxed font-semibold">3. TRANSACTION-MODE DISTINCTION</p>
                <p className="leading-relaxed">Jowih Credits may perform two distinct functions within the Jowih financial infrastructure:</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Mode</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">What Happens</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Customer Sees Credits?</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Credit-Routed FX</td>
                        <td className="p-3 align-top">Credits operate as an underlying routing mechanism for currency conversion</td>
                        <td className="p-3 align-top">❌ No - customer sees currency → currency</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Pay with Credits (Auto-Conversion)</td>
                        <td className="p-3 align-top">Credits are used for payment and convert instantly to local currency</td>
                        <td className="p-3 align-top">✅ Yes - user selects &quot;Pay with Credits&quot;</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Credit Wallet Transfer</td>
                        <td className="p-3 align-top">Credits are directly held, transferred, or settled between wallets</td>
                        <td className="p-3 align-top">✅ Yes - Credits move between wallets</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Holding Mode</td>
                        <td className="p-3 align-top">Credits are held for future use</td>
                        <td className="p-3 align-top">✅ Yes - user holds Credits</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed">Core Principle: The use of Credits within the underlying infrastructure shall not, by itself, require a customer-facing transaction to be denominated or settled in Credits.</p>
            </CollapsibleAccordionItem>

            <CollapsibleAccordionItem
              id="cb-05"
              number="05"
              title="Market Structure - Partner-Only Execution"
              summary="The Foundation is the credit layer; partners execute everything"
            >
                <p className="leading-relaxed font-semibold">4. MARKET STRUCTURE - PARTNER-ONLY EXECUTION</p>
                <p className="leading-relaxed font-semibold">4.1 Overview</p>
                <p className="leading-relaxed">Jowih Credits operates through a partner-only execution model. The Foundation issues and holds the credit. Partners handle ALL conversions.</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Tier</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Channel</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Users</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Transaction Range</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Who Handles</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Retail</td>
                        <td className="p-3 align-top">Partner Channels</td>
                        <td className="p-3 align-top">Individuals, SMEs, everyday users</td>
                        <td className="p-3 align-top">No minimum</td>
                        <td className="p-3 align-top">Partners</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Wholesale (Credits cap per FX transaction is $200M)</td>
                        <td className="p-3 align-top">Large Partners</td>
                        <td className="p-3 align-top">Governments, corporations, institutions</td>
                        <td className="p-3 align-top">$1M - $200M</td>
                        <td className="p-3 align-top">Partners</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Ultra-Large (Traditional FX Market)</td>
                        <td className="p-3 align-top">Tier 1 Partners</td>
                        <td className="p-3 align-top">Banks, FX institutions</td>
                        <td className="p-3 align-top">All amounts above $200M cap on Jowih Credits</td>
                        <td className="p-3 align-top">Partners route to Tier 1 partners. Traditional FX Market. (Credits don&apos;t handle above this)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed">The Foundation does not operate any exchange, conversion, or execution service. Partners handle all conversions.</p>
                <p className="leading-relaxed font-semibold">4.2 Partner Flexibility</p>
                <p className="leading-relaxed">Partners are not restricted to a single tier. Large or hybrid partners may operate across both retail and wholesale channels. Partners may define their own operational thresholds and:</p>
                <p className="leading-relaxed">Execute transactions directly; or</p>
                <p className="leading-relaxed">Route flows to Tier 1 institutions based on capacity or strategy</p>
                <p className="leading-relaxed font-semibold">4.3 Transaction Flow and Settlement Framework</p>
                <p className="leading-relaxed">The Jowih structure operates through a distributed partner network supported by a centralized settlement layer.</p>
                <p className="leading-relaxed">Participating partners - including institutional, wholesale, and hybrid operators - independently execute transactions based on their internal capabilities, external liquidity access, and operational models.</p>
                <p className="leading-relaxed">The Foundation does not directly intermediate or execute transactions. Instead, it provides the underlying settlement infrastructure that ensures system-wide consistency, reconciliation, and stability.</p>
                <p className="leading-relaxed">All transactions within the system are evaluated based on wallet currency state alignment, ensuring that any cross-currency movement of value is consistently identified and treated as an FX event regardless of transaction structure or routing path.</p>
                <p className="leading-relaxed">4.4 Partner Execution Model</p>
                <p className="leading-relaxed">Partners may process transactions through their own internal systems or in coordination with other network participants.</p>
                <p className="leading-relaxed">A. Internal Execution</p>
                <p className="leading-relaxed">Partners with sufficient external liquidity, infrastructure, and counterparty access may independently execute transactions within their own operational environment.</p>
                <p className="leading-relaxed">Under this model:</p>
                <p className="leading-relaxed">Transactions are processed entirely within the partner&apos;s internal system</p>
                <p className="leading-relaxed">The partner retains control over execution, pricing, and FX handling</p>
                <p className="leading-relaxed">Currency conversion (where applicable) is handled through the partner&apos;s own FX channels</p>
                <p className="leading-relaxed">No direct operational involvement from the Foundation is required during execution</p>
                <p className="leading-relaxed">The Foundation participates only at the settlement stage</p>
                <p className="leading-relaxed font-semibold">B. Network-Enabled Execution</p>
                <p className="leading-relaxed">Where internal execution is not optimal, partners may coordinate with other participants or route transactions across the partner network.</p>
                <p className="leading-relaxed">Under this model:</p>
                <p className="leading-relaxed">Transactions are fulfilled through inter-partner collaboration</p>
                <p className="leading-relaxed">Execution responsibilities may be distributed across multiple entities</p>
                <p className="leading-relaxed">Partners maintain flexibility in sourcing external liquidity and counterparties</p>
                <p className="leading-relaxed">Cross-currency outcomes remain subject to FX classification based on wallet currency state mismatch</p>
                <p className="leading-relaxed font-semibold">4.5 Partner Routing Framework</p>
                <p className="leading-relaxed">Partners may choose between two execution pathways:</p>
                <h3 className="text-lg uppercase tracking-tight mt-6">1. Internal Execution:</h3>
                <p className="leading-relaxed">Transactions are executed using the partner&apos;s own liquidity sources, banking relationships, or FX providers</p>
                <p className="leading-relaxed">Jowih Credits are used only for post-execution settlement recording</p>
                <p className="leading-relaxed">The partner retains full execution margin</p>
                <p className="leading-relaxed font-semibold">2. Routed Execution</p>
                <p className="leading-relaxed">Transactions are forwarded to another partner or Tier 1 institution</p>
                <p className="leading-relaxed">Execution occurs externally within the network or traditional FX market</p>
                <p className="leading-relaxed">The originating partner earns a routing or facilitation margin</p>
                <p className="leading-relaxed font-semibold">4.6 Mandatory System Rule</p>
                <p className="leading-relaxed">All transactions, regardless of execution path, must be recorded and reconciled through the Foundation&apos;s credit ledger. Final external settlement occurs in the applicable local or foreign currency through licensed execution partners.</p>
                <p className="leading-relaxed">This ensures:</p>
                <p className="leading-relaxed">A single, unified accounting layer</p>
                <p className="leading-relaxed">No bypass of system reconciliation</p>
                <p className="leading-relaxed">Consistent value representation across all participants</p>
                <p className="leading-relaxed">Preservation of system integrity without restricting execution flexibility</p>
                <p className="leading-relaxed">Additionally:</p>
                <p className="leading-relaxed">&quot;Any transfer resulting in a currency difference between originating and receiving wallets is classified as an FX event, independent of execution path or transaction structure.&quot;</p>
                <p className="leading-relaxed font-semibold">4.7 Division of Labor</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Layer</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Foundation</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Partners</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Credit Issuance</td>
                        <td className="p-3 align-top">✅</td>
                        <td className="p-3 align-top">❌</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Treasury / Holding</td>
                        <td className="p-3 align-top">✅</td>
                        <td className="p-3 align-top">❌</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Retail Conversion</td>
                        <td className="p-3 align-top">❌</td>
                        <td className="p-3 align-top">✅</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Wholesale Conversion</td>
                        <td className="p-3 align-top">❌</td>
                        <td className="p-3 align-top">✅</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Routing to Tier 1</td>
                        <td className="p-3 align-top">❌</td>
                        <td className="p-3 align-top">✅</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Domestic Spending</td>
                        <td className="p-3 align-top">❌</td>
                        <td className="p-3 align-top">✅</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">The Foundation does not compete with partners at any level. Partners handle all execution. The Foundation is the credit layer only.</p>
                <p className="leading-relaxed font-semibold">4.8 Non-Competition Commitment</p>
                <p className="leading-relaxed">The Foundation shall not operate retail or wholesale fiat on-ramp or off-ramp services in any market where licensed partners are actively offering conversion services.</p>
                <p className="leading-relaxed">The Foundation&apos;s role is limited to:</p>
                <p className="leading-relaxed">The bridge layer (Jowih Credits issuance, holding, and transfer)</p>
                <p className="leading-relaxed">The stable credit layer (treasury, reserve backing)</p>
                <p className="leading-relaxed">All conversions - retail and wholesale - are handled exclusively by partners.</p>
                <p className="leading-relaxed">Partners with wholesale capacity may handle conversions at their discretion. Partners may also route flows to Tier 1 institutions at their discretion.</p>
                <p className="leading-relaxed">This commitment ensures partners remain the default face of the Jowih Wallet and the backbone for all conversions. The Foundation is not a competitor - it is an enabler.</p>
            </CollapsibleAccordionItem>

            <CollapsibleAccordionItem
              id="cb-06"
              number="06"
              title="Proposed Fee Schedule"
              summary="Wallet transfers, on/off-ramps, B2B and local conversion fees"
            >
                <p className="leading-relaxed font-semibold">PROPOSED FEE SCHEDULE</p>
                <p className="leading-relaxed font-semibold">5.1 Overview</p>
                <p className="leading-relaxed">The Foundation does not charge any transaction fees. Partners set their own pricing based on the government tax base and their own margins.</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Transaction Type</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Foundation Fee</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Government Tax</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Total Base</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Partner Margin</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Total User Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Wallet-to-Wallet Transfer</td>
                        <td className="p-3 align-top">0%</td>
                        <td className="p-3 align-top">0%</td>
                        <td className="p-3 align-top">0%</td>
                        <td className="p-3 align-top">0% – 1%</td>
                        <td className="p-3 align-top">0% – 1%</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">On/Off-Ramp (Standard)</td>
                        <td className="p-3 align-top">0%</td>
                        <td className="p-3 align-top">0.25% – 0.30%</td>
                        <td className="p-3 align-top">0.25% – 0.30%</td>
                        <td className="p-3 align-top">0% – 1.5%</td>
                        <td className="p-3 align-top">0.25% – 1.80%</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">On/Off-Ramp (B2B/High-Volume)</td>
                        <td className="p-3 align-top">0%</td>
                        <td className="p-3 align-top">0.05% – 0.15%</td>
                        <td className="p-3 align-top">0.05% – 0.15%</td>
                        <td className="p-3 align-top">0% – 1.5%</td>
                        <td className="p-3 align-top">0.05% – 1.65%</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Local Transaction (Pay with Credits)</td>
                        <td className="p-3 align-top">0%</td>
                        <td className="p-3 align-top">0.05% – 0.30%</td>
                        <td className="p-3 align-top">0.05% – 0.30%</td>
                        <td className="p-3 align-top">0.1% – 1%</td>
                        <td className="p-3 align-top">0.15% – 1.30%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed">Notes:</p>
                <p className="leading-relaxed">The Foundation does not charge any transaction fees.</p>
                <p className="leading-relaxed font-semibold">Government tax is jurisdiction-aware and negotiable per country, per corridor, per segment.</p>
                <p className="leading-relaxed font-semibold">B2B/High-Volume rates apply to transactions above $1M equivalent or partners processing high annual volumes, subject to agreement with host governments.</p>
                <p className="leading-relaxed">Partners set their own margins within the defined maximums.</p>
                <p className="leading-relaxed font-semibold">5.2 Wallet-to-Wallet Transfers</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Channel</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Fee</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Government Tax</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Super App Native</td>
                        <td className="p-3 align-top">0% – 1%</td>
                        <td className="p-3 align-top">0%</td>
                        <td className="p-3 align-top">0% – 1%</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Partner Wallet</td>
                        <td className="p-3 align-top">0% – 1%</td>
                        <td className="p-3 align-top">0%</td>
                        <td className="p-3 align-top">0% – 1%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed">Notes:</p>
                <p className="leading-relaxed">No government tax as there is no realization event.</p>
                <p className="leading-relaxed">This is a pure transfer of Credits between wallets.</p>
                <p className="leading-relaxed">The Credits remain in the bridge layer.</p>
                <p className="leading-relaxed">Partners earn the fee they set.</p>
                <p className="leading-relaxed font-semibold">5.3 On-Ramp and Off-Ramp - Africa</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Direction</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Foundation Fee</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Partner Margin</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Government Tax</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Local → Credits</td>
                        <td className="p-3 align-top">0%</td>
                        <td className="p-3 align-top">0% – 1.5%</td>
                        <td className="p-3 align-top">0.25% – 0.30%</td>
                        <td className="p-3 align-top">0.25% – 1.80%</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Credits → Local</td>
                        <td className="p-3 align-top">0%</td>
                        <td className="p-3 align-top">0% – 1.5%</td>
                        <td className="p-3 align-top">0.25% – 0.30%</td>
                        <td className="p-3 align-top">0.25% – 1.80%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3 className="text-lg uppercase tracking-tight mt-6">Examples:</h3>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Scenario</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Partner Margin</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Government Tax</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Total Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Partner (Low Margin)</td>
                        <td className="p-3 align-top">0.5%</td>
                        <td className="p-3 align-top">0.25%</td>
                        <td className="p-3 align-top">0.75%</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Partner (Medium Margin)</td>
                        <td className="p-3 align-top">1.0%</td>
                        <td className="p-3 align-top">0.25%</td>
                        <td className="p-3 align-top">1.25%</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Partner (High Margin)</td>
                        <td className="p-3 align-top">1.5%</td>
                        <td className="p-3 align-top">0.25%</td>
                        <td className="p-3 align-top">1.75%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">5.4 On-Ramp and Off-Ramp - Global</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Direction</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Foundation Fee</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Partner Margin</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Government Tax</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Foreign → Credits</td>
                        <td className="p-3 align-top">0%</td>
                        <td className="p-3 align-top">0% – 1.5%</td>
                        <td className="p-3 align-top">0.25% – 0.30%</td>
                        <td className="p-3 align-top">0.25% – 1.80%</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Credits → Foreign</td>
                        <td className="p-3 align-top">0%</td>
                        <td className="p-3 align-top">0% – 1.5%</td>
                        <td className="p-3 align-top">0.25% – 0.30%</td>
                        <td className="p-3 align-top">0.25% – 1.80%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3 className="text-lg uppercase tracking-tight mt-6">Examples:</h3>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Scenario</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Partner Margin</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Government Tax</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Total Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Partner (Low Margin)</td>
                        <td className="p-3 align-top">0.5%</td>
                        <td className="p-3 align-top">0.25%</td>
                        <td className="p-3 align-top">0.75%</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Partner (Medium Margin)</td>
                        <td className="p-3 align-top">1.0%</td>
                        <td className="p-3 align-top">0.25%</td>
                        <td className="p-3 align-top">1.25%</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Partner (High Margin)</td>
                        <td className="p-3 align-top">1.5%</td>
                        <td className="p-3 align-top">0.25%</td>
                        <td className="p-3 align-top">1.75%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">5.5 B2B/High-Volume On-Ramp and Off-Ramp</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Direction</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Foundation Fee</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Partner Margin</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Government Tax</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Local → Credits</td>
                        <td className="p-3 align-top">0%</td>
                        <td className="p-3 align-top">0% – 1.5%</td>
                        <td className="p-3 align-top">0.05% – 0.15%</td>
                        <td className="p-3 align-top">0.05% – 1.65%</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Credits → Local</td>
                        <td className="p-3 align-top">0%</td>
                        <td className="p-3 align-top">0% – 1.5%</td>
                        <td className="p-3 align-top">0.05% – 0.15%</td>
                        <td className="p-3 align-top">0.05% – 1.65%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">Note: B2B rates apply to transactions above $1M equivalent or for partners processing high annual volumes, subject to agreement with host governments.</p>
                <p className="leading-relaxed font-semibold">5.6 Local Transactions Using Credits (Auto-Convert)</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Fee Component</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Rate</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Recipient</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Foundation Fee</td>
                        <td className="p-3 align-top">0%</td>
                        <td className="p-3 align-top">Foundation Treasury</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Partner Processing</td>
                        <td className="p-3 align-top">0.1% – 1%</td>
                        <td className="p-3 align-top">Partner Rail</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Government Tax</td>
                        <td className="p-3 align-top">0.05% – 0.30%</td>
                        <td className="p-3 align-top">Local Government</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Total</td>
                        <td className="p-3 align-top">0.15% – 1.30%</td>
                        <td className="p-3 align-top">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3 className="text-lg uppercase tracking-tight mt-6">Critical Clarification:</h3>
                <p className="leading-relaxed font-semibold">&quot;When a user selects Credits for a local transaction, Credits convert instantly to local currency in the background. Merchants and billers receive only local currency. Credits are never accepted directly by any merchant, biller, or service provider within the domestic economy. The user sees a simple &apos;Pay with Credits&apos; option, but the settlement is always in local currency. This ensures Credits remain a bridge layer and never function as a parallel currency.&quot;</p>
                <p className="leading-relaxed">Notes:</p>
                <p className="leading-relaxed">This applies when a user pays a bill, buys groceries, or makes any local purchase using Credits.</p>
                <p className="leading-relaxed">Credits convert instantly to local currency in the background.</p>
                <p className="leading-relaxed">The user sees a simple payment - the conversion is invisible.</p>
            </CollapsibleAccordionItem>

            <CollapsibleAccordionItem
              id="cb-07"
              number="07"
              title="Partner Margin Guidelines"
              summary="Maximum margins and flexible structuring rules"
            >
                <p className="leading-relaxed font-semibold">6. PARTNER MARGIN GUIDELINES</p>
                <p className="leading-relaxed font-semibold">6.1 Overview</p>
                <p className="leading-relaxed">Partners may add a margin on top of the government tax base for conversions. This margin is how partners earn revenue from the Jowih Credits ecosystem.</p>
                <p className="leading-relaxed">Partners have flexibility to structure their margins across different transaction amounts, user tiers, or market conditions. This allows them to compete effectively, attract different user segments, and optimize their revenue.</p>
                <p className="leading-relaxed font-semibold">6.2 Maximum Margin</p>
                <p className="leading-relaxed">The maximum partner margin is:</p>
                <p className="leading-relaxed">On-ramp/Off-ramp: 1.5% per transaction leg</p>
                <p className="leading-relaxed">Local Transactions: 0.1% – 1%</p>
                <p className="leading-relaxed">Wallet-to-Wallet Transfers: 0% – 1%</p>
                <p className="leading-relaxed">Partners may not exceed these maximums under any circumstance.</p>
                <p className="leading-relaxed font-semibold">6.3 Margin Structuring - Flexibility</p>
                <p className="leading-relaxed">Partners may structure their margins in one or more of the following ways:</p>
                <h3 className="text-lg uppercase tracking-tight mt-6">(a) Tiered by Transaction Amount:</h3>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Transaction Amount</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Partner Margin</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Total User Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">$0 – $100</td>
                        <td className="p-3 align-top">1.0%</td>
                        <td className="p-3 align-top">Base + 1.0%</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">$101 – $1,000</td>
                        <td className="p-3 align-top">0.8%</td>
                        <td className="p-3 align-top">Base + 0.8%</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">$1,001 – $10,000</td>
                        <td className="p-3 align-top">0.5%</td>
                        <td className="p-3 align-top">Base + 0.5%</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">$10,001+</td>
                        <td className="p-3 align-top">0.3%</td>
                        <td className="p-3 align-top">Base + 0.3%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">This example is illustrative. Partners may set their own tiers within the maximum.</p>
                <h3 className="text-lg uppercase tracking-tight mt-6">(b) Tiered by User Type:</h3>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">User Type</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Partner Margin</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Total User Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Individual (Standard)</td>
                        <td className="p-3 align-top">1.0%</td>
                        <td className="p-3 align-top">Base + 1.0%</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Individual (High Volume)</td>
                        <td className="p-3 align-top">0.5%</td>
                        <td className="p-3 align-top">Base + 0.5%</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">SME / Business</td>
                        <td className="p-3 align-top">0.4%</td>
                        <td className="p-3 align-top">Base + 0.4%</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Corporate</td>
                        <td className="p-3 align-top">0.3%</td>
                        <td className="p-3 align-top">Base + 0.3%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">This example is illustrative. Partners may set their own user tiers within the maximum.</p>
                <h3 className="text-lg uppercase tracking-tight mt-6">(c) Tiered by Market Conditions:</h3>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Market Condition</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Partner Margin</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Total User Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Standard</td>
                        <td className="p-3 align-top">1.0%</td>
                        <td className="p-3 align-top">Base + 1.0%</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Promotional Period</td>
                        <td className="p-3 align-top">0.5%</td>
                        <td className="p-3 align-top">Base + 0.5%</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">High Competition</td>
                        <td className="p-3 align-top">0.3%</td>
                        <td className="p-3 align-top">Base + 0.3%</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Peak Demand</td>
                        <td className="p-3 align-top">1.2%</td>
                        <td className="p-3 align-top">Base + 1.2%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">This example is illustrative. Partners may set their own market-based margins within the maximum.</p>
                <h3 className="text-lg uppercase tracking-tight mt-6">(d) Flat Margin:</h3>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Partner Type</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Partner Margin</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Total User Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">M-Pesa</td>
                        <td className="p-3 align-top">0.8%</td>
                        <td className="p-3 align-top">Base + 0.8%</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Bank</td>
                        <td className="p-3 align-top">0.6%</td>
                        <td className="p-3 align-top">Base + 0.6%</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">PayPal</td>
                        <td className="p-3 align-top">0.7%</td>
                        <td className="p-3 align-top">Base + 0.7%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">This example is illustrative. Partners may set their own flat margins within the maximum.</p>
                <p className="leading-relaxed">All tiered structures must be clearly documented and disclosed to users.</p>
                <p className="leading-relaxed font-semibold">6.4 Margin Changes</p>
                <p className="leading-relaxed">Partners may adjust their margin structure at any time, subject to:</p>
                <p className="leading-relaxed">10 business days&apos; notice to the Jowih Credit Company</p>
                <p className="leading-relaxed">5 business days&apos; notice to users before any changes take effect</p>
                <p className="leading-relaxed">The new structure remains within the applicable maximums</p>
                <p className="leading-relaxed font-semibold">6.5 Disclosure in agreement with host Governments</p>
                <p className="leading-relaxed">Partners must clearly display their margin to users before conversion. The display must include:</p>
                <p className="leading-relaxed">Government Tax Base</p>
                <p className="leading-relaxed">Partner Margin (and tier details if applicable)</p>
                <p className="leading-relaxed">Total Cost</p>
                <p className="leading-relaxed font-semibold">6.6 Transparency Requirement</p>
                <p className="leading-relaxed">Partners must ensure that:</p>
                <p className="leading-relaxed">Users see the total cost before confirming</p>
                <p className="leading-relaxed">The breakdown of fees is clearly shown</p>
                <p className="leading-relaxed">Users can compare rates across partners</p>
                <p className="leading-relaxed">Users are notified of any changes to margins</p>
            </CollapsibleAccordionItem>

            <CollapsibleAccordionItem
              id="cb-08"
              number="08"
              title="Domestic Spending, Holding Period &amp; Credit-Routed FX"
              summary="Auto-conversion at the point of spending; optional six-month holding"
            >
                <p className="leading-relaxed font-semibold">7. DOMESTIC SPENDING - AUTO-CONVERSION</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Step</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Action</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">1</td>
                        <td className="p-3 align-top">Select payment method</td>
                        <td className="p-3 align-top">Choose &quot;Pay with Credits&quot;</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">2</td>
                        <td className="p-3 align-top">Conversion</td>
                        <td className="p-3 align-top">Credits convert instantly to local currency in the background</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">3</td>
                        <td className="p-3 align-top">Settlement</td>
                        <td className="p-3 align-top">Merchant receives local currency</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">4</td>
                        <td className="p-3 align-top">Confirmation</td>
                        <td className="p-3 align-top">User receives confirmation of payment</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3 className="text-lg uppercase tracking-tight mt-6">Critical Clarification:</h3>
                <p className="leading-relaxed font-semibold">&quot;Credits are never accepted directly by merchants, billers, or service providers. When a user selects &apos;Pay with Credits,&apos; the Credits convert instantly to local currency in the background. The merchant, biller, or service provider receives only local currency. This ensures Credits remain a bridge layer and never function as a parallel currency within any domestic economy.&quot;</p>
                <p className="leading-relaxed font-semibold">Note: The conversion is invisible to the user. They see a simple payment. Credits never enter the domestic economy.</p>
                <p className="leading-relaxed font-semibold">8. HOLDING PERIOD</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Period</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">0 – 6 months</td>
                        <td className="p-3 align-top">Normal holding</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">6 months</td>
                        <td className="p-3 align-top">Notification to convert</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">6 months + 1 week</td>
                        <td className="p-3 align-top">Grace period</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3 className="text-lg uppercase tracking-tight mt-6">Institutional Extensions:</h3>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Category</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Extended Period</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Conditions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Governments</td>
                        <td className="p-3 align-top">Up to 24 months or as agreed</td>
                        <td className="p-3 align-top">Development purposes</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Banks and Financial Institutions</td>
                        <td className="p-3 align-top">Up to 18 months or as agreed</td>
                        <td className="p-3 align-top">Liquidity management</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">ADFA Contractors</td>
                        <td className="p-3 align-top">Project duration + 3 months</td>
                        <td className="p-3 align-top">Project-related payments</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Institutional Investors</td>
                        <td className="p-3 align-top">Up to 18 months</td>
                        <td className="p-3 align-top">Subject to use case approval</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">9. CREDIT-ROUTED FX - DEFINITION</p>
                <p className="leading-relaxed">Credit-Routed FX is the Foundation&apos;s FX routing mechanism through which Jowih Credits serve as the underlying routing unit between two currencies.</p>
                <p className="leading-relaxed">Under Credit-Routed FX, a currency conversion may be processed through the Jowih Credit infrastructure without requiring the customer to acquire or retain Jowih Credits as a visible balance.</p>
                <p className="leading-relaxed">The general routing structure is:</p>
                <p className="leading-relaxed">Currency A → Jowih Credit Routing Layer → Currency B</p>
                <p className="leading-relaxed">The customer-facing transaction may therefore begin and end in the respective local currencies, while Jowih Credits perform the underlying routing function within the system.</p>
                <p className="leading-relaxed">Credit-Routed FX is intended to provide an alternative to traditional FX execution for transactions within the applicable Jowih transaction ceiling ($200M per FX-classified transaction).</p>
            </CollapsibleAccordionItem>

            <CollapsibleAccordionItem
              id="cb-09"
              number="09"
              title="Reserve Management &amp; Liquidity Protocols"
              summary="100% asset-backed reserves, rebalancing, audit and liquidity guarantees"
            >
                <p className="leading-relaxed font-semibold">10. RESERVE MANAGEMENT PROCEDURES</p>
                <p className="leading-relaxed font-semibold">10.1 Reserve Composition</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Reserve Type</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Allocation</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Assets</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">High-Liquid Reserves</td>
                        <td className="p-3 align-top">30% – 50%</td>
                        <td className="p-3 align-top">Cash, gold, short-term government securities</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Foundation Assets</td>
                        <td className="p-3 align-top">50% – 70%</td>
                        <td className="p-3 align-top">Revenue streams, companies, real estate, ADFA projects</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">10.2 Rebalancing</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Trigger</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Action</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Frequency</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">High-Liquid below 30%</td>
                        <td className="p-3 align-top">Rebalance to 30% minimum</td>
                        <td className="p-3 align-top">Quarterly or as needed</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Foundation Assets above 70%</td>
                        <td className="p-3 align-top">Rebalance to 70% maximum</td>
                        <td className="p-3 align-top">Quarterly or as needed</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Market conditions</td>
                        <td className="p-3 align-top">Adjust allocation within range</td>
                        <td className="p-3 align-top">As needed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">10.3 Valuation</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Asset Type</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Valuation Method</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Frequency</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Cash</td>
                        <td className="p-3 align-top">Actual balance</td>
                        <td className="p-3 align-top">Daily</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Gold</td>
                        <td className="p-3 align-top">Market price</td>
                        <td className="p-3 align-top">Daily</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Government Securities available</td>
                        <td className="p-3 align-top">Market price</td>
                        <td className="p-3 align-top">Daily</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Jowih Ecosystem Revenue Streams</td>
                        <td className="p-3 align-top">Discounted cash flow</td>
                        <td className="p-3 align-top">Quarterly</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Jowih Group Companies</td>
                        <td className="p-3 align-top">Market comparables</td>
                        <td className="p-3 align-top">Quarterly</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Real Estate / TND City</td>
                        <td className="p-3 align-top">Appraisal</td>
                        <td className="p-3 align-top">Annually</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">ADFA and CDEs  Projects</td>
                        <td className="p-3 align-top">Net present value</td>
                        <td className="p-3 align-top">Quarterly</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">10.4 Audit</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Audit Type</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Frequency</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Auditor</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Internal Audit</td>
                        <td className="p-3 align-top">Quarterly</td>
                        <td className="p-3 align-top">IAG Departments</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">External Audit</td>
                        <td className="p-3 align-top">Annually</td>
                        <td className="p-3 align-top">External Auditor Firm</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Publication</td>
                        <td className="p-3 align-top">Within 30 days of audit without delay</td>
                        <td className="p-3 align-top">Public Dashboard</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">11. LIQUIDITY PROTOCOLS</p>
                <p className="leading-relaxed font-semibold">11.1 Off-Ramp Liquidity Pools</p>
                <p className="leading-relaxed">The Foundation under its company  maintains Off-Ramp Liquidity Pools in major African currencies and other major currencies to ensure instant conversion at all times.</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Illustrative Currency</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Pool Size</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Review Frequency</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">KES (Kenya)</td>
                        <td className="p-3 align-top">Based on historical volume</td>
                        <td className="p-3 align-top">Quarterly</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">NGN (Nigeria)</td>
                        <td className="p-3 align-top">Based on historical volume</td>
                        <td className="p-3 align-top">Quarterly</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">ZAR (South Africa)</td>
                        <td className="p-3 align-top">Based on historical volume</td>
                        <td className="p-3 align-top">Quarterly</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">GHS (Ghana)</td>
                        <td className="p-3 align-top">Based on historical volume</td>
                        <td className="p-3 align-top">Quarterly</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">XOF (West Africa)</td>
                        <td className="p-3 align-top">Based on historical volume</td>
                        <td className="p-3 align-top">Quarterly</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">XAF (Central Africa)</td>
                        <td className="p-3 align-top">Based on historical volume</td>
                        <td className="p-3 align-top">Quarterly</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">EGP (Egypt)</td>
                        <td className="p-3 align-top">Based on historical volume</td>
                        <td className="p-3 align-top">Quarterly</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">USD</td>
                        <td className="p-3 align-top">Based on historical volume</td>
                        <td className="p-3 align-top">Quarterly</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">EUR</td>
                        <td className="p-3 align-top">Based on historical volume</td>
                        <td className="p-3 align-top">Quarterly</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">CYN</td>
                        <td className="p-3 align-top">Based on historical volume</td>
                        <td className="p-3 align-top">Quarterly</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">11.2 Settlement Guarantee Fund</p>
                <p className="leading-relaxed">The Foundation maintains a Settlement Guarantee Fund capitalized at 2% of average daily settlement volume.</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Element</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Purpose</td>
                        <td className="p-3 align-top">Ensure finality of cross-border trade settlements</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Capitalization</td>
                        <td className="p-3 align-top">2% of average daily settlement volume</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Held In</td>
                        <td className="p-3 align-top">High-Liquid Reserves</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Audit</td>
                        <td className="p-3 align-top">Subject to same audit requirements as main reserve</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">11.3 Liquidity Guarantee</p>
                <p className="leading-relaxed">&quot;The Foundation under its company guarantees liquidity for all conversions through a combination of: (i) High-Liquid Reserves maintained at a minimum of 30% of total backing; (ii) Off-Ramp Liquidity Pools in major African currencies and Foreign currencies; (iii) a Settlement Guarantee Fund capitalized at 2% of average daily settlement volume; and (iv) access to Mission Fund backstop for extraordinary demand scenarios. In stress scenarios, the Combined Trusts Board may temporarily adjust pool allocations or draw from the Settlement Guarantee Fund to maintain continuous conversion capability.&quot;</p>
                <p className="leading-relaxed font-semibold">11.4 Emergency Liquidity</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Scenario</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Action</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Highest Authority</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Liquidity shortage</td>
                        <td className="p-3 align-top">Draw from Settlement Guarantee Fund</td>
                        <td className="p-3 align-top">Combined Trusts Board</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Market disruption</td>
                        <td className="p-3 align-top">Temporary adjustment to pool sizes</td>
                        <td className="p-3 align-top">Combined Trusts Board</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Extraordinary demand</td>
                        <td className="p-3 align-top">Additional allocation from Mission Fund</td>
                        <td className="p-3 align-top">Combined Trusts Board</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            </CollapsibleAccordionItem>

            <CollapsibleAccordionItem
              id="cb-10"
              number="10"
              title="Government Tax Remittance"
              summary="Jurisdiction-aware tax collection, remittance and reporting"
            >
                <p className="leading-relaxed font-semibold">12. GOVERNMENT TAX REMITTANCE</p>
                <p className="leading-relaxed font-semibold">12.1 Overview</p>
                <p className="leading-relaxed">The Foundation collects and remits government taxes on all on-ramp and off-ramp conversions. The tax rate is flexible:</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Segment</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Government Tax Range</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Standard (Retail/SME)</td>
                        <td className="p-3 align-top">0.25% – 0.30%</td>
                        <td className="p-3 align-top">Default rate</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">B2B / High-Volume</td>
                        <td className="p-3 align-top">0.05% – 0.15%</td>
                        <td className="p-3 align-top">Subject to agreement with host governments</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Local Transactions</td>
                        <td className="p-3 align-top">0.05% – 0.30%</td>
                        <td className="p-3 align-top">Jurisdiction-aware</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3 className="text-lg uppercase tracking-tight mt-6">Flexibility:</h3>
                <p className="leading-relaxed">Governments may negotiate rates within the defined ranges.</p>
                <p className="leading-relaxed">B2B rates apply to transactions above $1M equivalent or for partners processing high annual volumes.</p>
                <p className="leading-relaxed">The Credits company Board shall maintain a schedule of approved rates in the Operational Framework subject to approval and recognition from Combined Trust board.</p>
                <p className="leading-relaxed font-semibold">12.2 Tax Collection</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Transaction Type</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Who Collects</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">How</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">All Conversions</td>
                        <td className="p-3 align-top">Partner</td>
                        <td className="p-3 align-top">Withheld at point of conversion</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">12.3 Tax Remittance</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Element</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Frequency</td>
                        <td className="p-3 align-top">Monthly</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Method</td>
                        <td className="p-3 align-top">Direct transfer to each government&apos;s designated account</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Reporting</td>
                        <td className="p-3 align-top">Auditable reports provided to each government</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Currency</td>
                        <td className="p-3 align-top">Credits converted to local currency at the time of remittance</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">12.4 Remittance Schedule</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Period</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Collection</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Remittance</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Deadline</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">January</td>
                        <td className="p-3 align-top">Jan 1-31</td>
                        <td className="p-3 align-top">February</td>
                        <td className="p-3 align-top">Last day of February</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">February</td>
                        <td className="p-3 align-top">Feb 1-28/29</td>
                        <td className="p-3 align-top">March</td>
                        <td className="p-3 align-top">Last day of March</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">March</td>
                        <td className="p-3 align-top">Mar 1-31</td>
                        <td className="p-3 align-top">April</td>
                        <td className="p-3 align-top">Last day of April</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">...</td>
                        <td className="p-3 align-top">...</td>
                        <td className="p-3 align-top">...</td>
                        <td className="p-3 align-top">...</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">December</td>
                        <td className="p-3 align-top">Dec 1-31</td>
                        <td className="p-3 align-top">January</td>
                        <td className="p-3 align-top">Last day of January</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">12.5 Reporting</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Report Content</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Transaction Summary</td>
                        <td className="p-3 align-top">Number of conversions, total value</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Tax Collected</td>
                        <td className="p-3 align-top">Total tax by country</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Remittance Details</td>
                        <td className="p-3 align-top">Date, amount, method</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Audit Trail</td>
                        <td className="p-3 align-top">Transaction-level data for audit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">12.6 Governments Not Yet Active</p>
                <p className="leading-relaxed">For governments not yet integrated with the Foundation&apos;s remittance system, taxes shall be held in a dedicated escrow account and remitted upon integration.</p>
            </CollapsibleAccordionItem>

            <CollapsibleAccordionItem
              id="cb-11"
              number="11"
              title="Partner Integration Standards"
              summary="Technical, API and security requirements for partners"
            >
                <p className="leading-relaxed font-semibold">13. PARTNER INTEGRATION STANDARDS</p>
                <p className="leading-relaxed font-semibold">13.1 Technical Requirements</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Requirement</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">API Integration</td>
                        <td className="p-3 align-top">REST API with standard JSON payloads</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Security</td>
                        <td className="p-3 align-top">TLS 1.2+, API keys, signed requests</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Authentication</td>
                        <td className="p-3 align-top">OAuth 2.0 or equivalent</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Rate Limiting</td>
                        <td className="p-3 align-top">As agreed in partnership agreement</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Uptime</td>
                        <td className="p-3 align-top">Minimum 99.9%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">13.2 Integration Types</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Type</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Description</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Use Case</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Full Integration</td>
                        <td className="p-3 align-top">Complete API integration for conversion, settlement, reporting</td>
                        <td className="p-3 align-top">Major partners (M-Pesa, banks, Mastercard)</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Light Integration</td>
                        <td className="p-3 align-top">Limited API integration for specific use cases</td>
                        <td className="p-3 align-top">Smaller PSPs, niche fintechs</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">White-Label</td>
                        <td className="p-3 align-top">Partner-branded interface on Foundation platform</td>
                        <td className="p-3 align-top">Custom partner solutions</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">13.3 Example API Endpoints</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Endpoint</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">/v1/conversion/rate</td>
                        <td className="p-3 align-top">Get current conversion rate</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">/v1/conversion/onramp</td>
                        <td className="p-3 align-top">Convert local currency to Credits</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">/v1/conversion/offramp</td>
                        <td className="p-3 align-top">Convert Credits to local currency</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">/v1/transfer</td>
                        <td className="p-3 align-top">Transfer Credits between wallets</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">/v1/balance</td>
                        <td className="p-3 align-top">Get wallet balance</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">/v1/report/tax</td>
                        <td className="p-3 align-top">Submit tax transaction data</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">13.4 Security Requirements</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Requirement</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Data Encryption</td>
                        <td className="p-3 align-top">All sensitive data encrypted at rest and in transit</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Access Control</td>
                        <td className="p-3 align-top">Role-based access control for all systems</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Audit Logging</td>
                        <td className="p-3 align-top">Comprehensive audit logs for all transactions</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Penetration Testing</td>
                        <td className="p-3 align-top">Annual third-party security assessment</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Incident Response</td>
                        <td className="p-3 align-top">Documented incident response plan</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            </CollapsibleAccordionItem>

            <CollapsibleAccordionItem
              id="cb-12"
              number="12"
              title="User Operational Procedures"
              summary="Wallet creation, modes, on/off-ramp and transfers end-to-end"
            >
                <p className="leading-relaxed font-semibold">14. USER OPERATIONAL PROCEDURES</p>
                <p className="leading-relaxed font-semibold">14.1 Wallet Operations</p>
                <p className="leading-relaxed font-semibold">14.1.1 Creating a Wallet</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Step</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Action</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">1</td>
                        <td className="p-3 align-top">Download Super App</td>
                        <td className="p-3 align-top">Available on iOS and Android</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">2</td>
                        <td className="p-3 align-top">Create account</td>
                        <td className="p-3 align-top">Email or phone number verification</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">3</td>
                        <td className="p-3 align-top">KYC verification</td>
                        <td className="p-3 align-top">As required by regulatory compliance</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">4</td>
                        <td className="p-3 align-top">Activate wallet</td>
                        <td className="p-3 align-top">Instant activation</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">5</td>
                        <td className="p-3 align-top">Choose mode</td>
                        <td className="p-3 align-top">Auto-Conversion (default) or Holding (optional) or both and switch as needed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">14.1.2 Holding Mode</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Feature</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Purpose</td>
                        <td className="p-3 align-top">Hold Credits for future use</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Default</td>
                        <td className="p-3 align-top">No - Auto-Conversion is default</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Opt-In</td>
                        <td className="p-3 align-top">Yes - users must choose to hold Credits</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Maximum Period</td>
                        <td className="p-3 align-top">6 months (unless extended for institutions)</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Security</td>
                        <td className="p-3 align-top">Multi-factor authentication, transaction confirmation</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Conversion</td>
                        <td className="p-3 align-top">Convert to local currency at any time</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">14.1.3 Auto-Conversion Mode</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Feature</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Purpose</td>
                        <td className="p-3 align-top">Instant conversion for spending</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Default</td>
                        <td className="p-3 align-top">Yes - default mode for all users</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Opt-Out</td>
                        <td className="p-3 align-top">Users may choose Holding Mode instead</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Conversion</td>
                        <td className="p-3 align-top">Credits convert instantly to local currency for domestic spending</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Spending</td>
                        <td className="p-3 align-top">Users see simple payment - conversion is invisible</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">14.1.4 Switching Modes</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Action</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">How</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Effect</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Switch to Holding</td>
                        <td className="p-3 align-top">Select &quot;Hold Credits&quot; in wallet settings</td>
                        <td className="p-3 align-top">Credits remain in wallet for future use</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Switch to Auto-Conversion</td>
                        <td className="p-3 align-top">Select &quot;Auto-Convert&quot; in wallet settings</td>
                        <td className="p-3 align-top">Credits convert instantly for spending</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">14.2 Conversion Procedures</p>
                <p className="leading-relaxed font-semibold">14.2.1 On-Ramp (Local Currency → Credits)</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Step</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Action</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">1</td>
                        <td className="p-3 align-top">Initiate conversion</td>
                        <td className="p-3 align-top">Select &quot;Buy Credits&quot; in Super App PSP or external partner app</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">2</td>
                        <td className="p-3 align-top">Enter amount</td>
                        <td className="p-3 align-top">Enter amount in local currency</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">3</td>
                        <td className="p-3 align-top">View rate</td>
                        <td className="p-3 align-top">See government tax + partner margin</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">4</td>
                        <td className="p-3 align-top">Confirm</td>
                        <td className="p-3 align-top">Authorize the transaction</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">5</td>
                        <td className="p-3 align-top">Complete</td>
                        <td className="p-3 align-top">Credits are credited to wallet</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">14.2.2 Off-Ramp (Credits → Local Currency)</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Step</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Action</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">1</td>
                        <td className="p-3 align-top">Initiate conversion</td>
                        <td className="p-3 align-top">Select &quot;Sell Credits&quot; in Super App PSP or external partner app</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">2</td>
                        <td className="p-3 align-top">Enter amount</td>
                        <td className="p-3 align-top">Enter amount in Credits</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">3</td>
                        <td className="p-3 align-top">View rate</td>
                        <td className="p-3 align-top">See government tax + partner margin</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">4</td>
                        <td className="p-3 align-top">Confirm</td>
                        <td className="p-3 align-top">Authorize the transaction</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">5</td>
                        <td className="p-3 align-top">Complete</td>
                        <td className="p-3 align-top">Local currency is credited to bank or mobile money account</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">14.2.3 Domestic Spending (Credits → Local Currency for Spending)</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Step</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Action</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">1</td>
                        <td className="p-3 align-top">Select payment method</td>
                        <td className="p-3 align-top">Choose &quot;Pay with Credits&quot;</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">2</td>
                        <td className="p-3 align-top">Conversion</td>
                        <td className="p-3 align-top">Credits convert instantly to local currency in the background</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">3</td>
                        <td className="p-3 align-top">Settlement</td>
                        <td className="p-3 align-top">Merchant receives local currency</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">4</td>
                        <td className="p-3 align-top">Confirmation</td>
                        <td className="p-3 align-top">User receives confirmation of payment</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3 className="text-lg uppercase tracking-tight mt-6">Critical Clarification:</h3>
                <p className="leading-relaxed font-semibold">&quot;Credits are never accepted directly by merchants, billers, or service providers. When a user selects &apos;Pay with Credits,&apos; the Credits convert instantly to local currency in the background. The merchant, biller, or service provider receives only local currency. This ensures Credits remain a bridge layer and never function as a parallel currency within any domestic economy.&quot;</p>
                <p className="leading-relaxed font-semibold">Note: The conversion is invisible to the user. They see a simple payment.</p>
                <p className="leading-relaxed font-semibold">14.3 Wallet-to-Wallet Transfers</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Step</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Action</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">1</td>
                        <td className="p-3 align-top">Select wallet</td>
                        <td className="p-3 align-top">Choose a recipient from contacts</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">2</td>
                        <td className="p-3 align-top">Enter amount</td>
                        <td className="p-3 align-top">Enter amount in Credits</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">3</td>
                        <td className="p-3 align-top">View fee</td>
                        <td className="p-3 align-top">See 0% – 1% transaction fee (partner-defined)</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">4</td>
                        <td className="p-3 align-top">Confirm</td>
                        <td className="p-3 align-top">Authorize the transfer</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">5</td>
                        <td className="p-3 align-top">Complete</td>
                        <td className="p-3 align-top">Credits are transferred instantly</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">14.4 Holding Period Enforcement</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Period</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Action</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">0-6 months</td>
                        <td className="p-3 align-top">Normal holding</td>
                        <td className="p-3 align-top">User may hold Credits</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">6 months</td>
                        <td className="p-3 align-top">Notification</td>
                        <td className="p-3 align-top">User receives notification to convert</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">6 months + 1 week</td>
                        <td className="p-3 align-top">Grace period</td>
                        <td className="p-3 align-top">One-week grace period for conversion</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            </CollapsibleAccordionItem>

            <CollapsibleAccordionItem
              id="cb-13"
              number="13"
              title="AML/CFT Compliance, Data Privacy &amp; Neutrality"
              summary="KYC allocation, data sovereignty and the neutrality clause"
            >
                <p className="leading-relaxed font-semibold">15. AML/CFT COMPLIANCE</p>
                <p className="leading-relaxed font-semibold">15.1 Responsibility Allocation</p>
                <p className="leading-relaxed">&quot;Partners bear primary responsibility for KYC/AML compliance for their customers, including customer identification, verification, and ongoing monitoring. The Foundation provides oversight, monitoring, and reporting infrastructure, including transaction monitoring, sanctions screening, and suspicious activity reporting. The Foundation does not replace partner KYC obligations but ensures compliance with FATF Recommendation 15 and applicable host country laws.&quot;</p>
                <p className="leading-relaxed font-semibold">15.2 KYC Requirements</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">User Type</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">KYC Level</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Requirements</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Individual (Super App Native)</td>
                        <td className="p-3 align-top">Level 1</td>
                        <td className="p-3 align-top">Name, phone number, ID verification</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Individual (Partner)</td>
                        <td className="p-3 align-top">Partner&apos;s KYC</td>
                        <td className="p-3 align-top">As per partner&apos;s requirements</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">SME</td>
                        <td className="p-3 align-top">Level 2</td>
                        <td className="p-3 align-top">Business registration, beneficial ownership</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Wholesale</td>
                        <td className="p-3 align-top">Level 3</td>
                        <td className="p-3 align-top">Full due diligence, source of funds</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Institution</td>
                        <td className="p-3 align-top">Level 3</td>
                        <td className="p-3 align-top">Full due diligence, regulatory approval</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">16. DATA PRIVACY AND SOVEREIGNTY</p>
                <p className="leading-relaxed font-semibold">16.1 Data Ownership</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Data Type</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Owner</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Customer data</td>
                        <td className="p-3 align-top">Partner</td>
                        <td className="p-3 align-top">Partner&apos;s business use</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Transaction data</td>
                        <td className="p-3 align-top">Foundation</td>
                        <td className="p-3 align-top">Settlement and reporting</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Aggregated data</td>
                        <td className="p-3 align-top">Foundation</td>
                        <td className="p-3 align-top">Public reporting</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Analytical data</td>
                        <td className="p-3 align-top">Foundation</td>
                        <td className="p-3 align-top">System improvement</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">16.2 Data Sharing</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Data Shared</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">With Whom</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Aggregated transaction data</td>
                        <td className="p-3 align-top">Public</td>
                        <td className="p-3 align-top">Transparency where needed</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Tax transaction data</td>
                        <td className="p-3 align-top">Governments</td>
                        <td className="p-3 align-top">Tax remittance</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Anonymized settlement data</td>
                        <td className="p-3 align-top">Partners</td>
                        <td className="p-3 align-top">Reconciliation</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">NOT Shared</td>
                        <td className="p-3 align-top">-</td>
                        <td className="p-3 align-top">-</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Individual transaction data</td>
                        <td className="p-3 align-top">Not shared</td>
                        <td className="p-3 align-top">Privacy protected</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Customer personal data</td>
                        <td className="p-3 align-top">Not shared</td>
                        <td className="p-3 align-top">Partner owned</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">16.3 Data Sovereignty</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Requirement</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Domestic data</td>
                        <td className="p-3 align-top">Remains within host country jurisdiction</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Cross-border data</td>
                        <td className="p-3 align-top">Anonymized and aggregated</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Data localization</td>
                        <td className="p-3 align-top">All sensitive data stored in Africa</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">17. NEUTRALITY CLAUSE</p>
                <p className="leading-relaxed">&quot;The Foundation shall not favor any currency, jurisdiction, partner, or financial system. All currencies, jurisdictions, partners, and financial systems shall be treated equally and without preference, subject only to regulatory compliance and operational capability. The Foundation shall not engage in currency speculation, market manipulation, or any activity that could be construed as favoring one currency or jurisdiction over another. This neutrality is fundamental to the Foundation&apos;s role as a neutral bridge between currencies and systems.&quot;</p>
            </CollapsibleAccordionItem>

            <CollapsibleAccordionItem
              id="cb-14"
              number="14"
              title="Dispute Resolution, Reporting &amp; Amendments"
              summary="User, partner and government disputes; dashboards; amendment rules"
            >
                <p className="leading-relaxed font-semibold">18. DISPUTE RESOLUTION</p>
                <p className="leading-relaxed font-semibold">18.1 User Disputes</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Step</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Action</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Timeline</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">1</td>
                        <td className="p-3 align-top">User submits complaint</td>
                        <td className="p-3 align-top">Within 30 days of transaction</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">2</td>
                        <td className="p-3 align-top">Foundation investigates</td>
                        <td className="p-3 align-top">5-10 business days</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">3</td>
                        <td className="p-3 align-top">Resolution provided</td>
                        <td className="p-3 align-top">Within 20 business days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">18.2 Partner Disputes</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Step</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Action</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Timeline</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">1</td>
                        <td className="p-3 align-top">Partner submits complaint</td>
                        <td className="p-3 align-top">Within 30 days of incident</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">2</td>
                        <td className="p-3 align-top">Foundation investigates</td>
                        <td className="p-3 align-top">10-15 business days</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">3</td>
                        <td className="p-3 align-top">Escalation to Combined Trusts Board</td>
                        <td className="p-3 align-top">If unresolved</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">4</td>
                        <td className="p-3 align-top">Binding arbitration</td>
                        <td className="p-3 align-top">If required</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">18.3 Government Disputes</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Step</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Action</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Timeline</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">1</td>
                        <td className="p-3 align-top">Government submits complaint</td>
                        <td className="p-3 align-top">Within 60 days of incident</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">2</td>
                        <td className="p-3 align-top">Foundation investigates</td>
                        <td className="p-3 align-top">15-30 business days</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">3</td>
                        <td className="p-3 align-top">Binding international arbitration</td>
                        <td className="p-3 align-top">If required</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">19. REPORTING SCHEDULES</p>
                <p className="leading-relaxed font-semibold">19.1 Public Dashboard</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Content</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Frequency</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Reserve composition</td>
                        <td className="p-3 align-top">Quarterly</td>
                        <td className="p-3 align-top">Transparency</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Reserve valuation</td>
                        <td className="p-3 align-top">Quarterly</td>
                        <td className="p-3 align-top">Transparency</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Transaction volume</td>
                        <td className="p-3 align-top">Monthly</td>
                        <td className="p-3 align-top">Transparency</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Tax collected</td>
                        <td className="p-3 align-top">Monthly</td>
                        <td className="p-3 align-top">Transparency</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Tax remitted</td>
                        <td className="p-3 align-top">Monthly</td>
                        <td className="p-3 align-top">Transparency</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Partner performance</td>
                        <td className="p-3 align-top">Quarterly</td>
                        <td className="p-3 align-top">Transparency</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Audit reports</td>
                        <td className="p-3 align-top">Quarterly</td>
                        <td className="p-3 align-top">Transparency</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">19.2 Government Reports</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Content</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Frequency</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Tax collected within jurisdiction</td>
                        <td className="p-3 align-top">Monthly</td>
                        <td className="p-3 align-top">Compliance</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Tax remitted within jurisdiction</td>
                        <td className="p-3 align-top">Monthly</td>
                        <td className="p-3 align-top">Compliance</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Transaction summary</td>
                        <td className="p-3 align-top">Monthly</td>
                        <td className="p-3 align-top">Transparency</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Audit trail</td>
                        <td className="p-3 align-top">Quarterly</td>
                        <td className="p-3 align-top">Compliance</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">19.3 Partner Reports</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Content</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Frequency</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Conversion volume</td>
                        <td className="p-3 align-top">Monthly</td>
                        <td className="p-3 align-top">Performance</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Fee earned</td>
                        <td className="p-3 align-top">Monthly</td>
                        <td className="p-3 align-top">Performance</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">User activity</td>
                        <td className="p-3 align-top">Monthly</td>
                        <td className="p-3 align-top">Performance</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">19.4 IAG Audit Reports</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Content</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Frequency</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Reserve audit</td>
                        <td className="p-3 align-top">Quarterly</td>
                        <td className="p-3 align-top">Compliance</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Transaction audit</td>
                        <td className="p-3 align-top">Quarterly</td>
                        <td className="p-3 align-top">Compliance</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Tax remittance audit</td>
                        <td className="p-3 align-top">Quarterly</td>
                        <td className="p-3 align-top">Compliance</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">Annual audit</td>
                        <td className="p-3 align-top">Annually</td>
                        <td className="p-3 align-top">Comprehensive review</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">20. AMENDMENT PROCEDURES</p>
                <p className="leading-relaxed font-semibold">20.1 Amendment Process</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Step</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Action</th>
                        <th className="text-left p-3 uppercase tracking-tight align-top">Timeline</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">1</td>
                        <td className="p-3 align-top">Proposed amendment</td>
                        <td className="p-3 align-top">-</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">2</td>
                        <td className="p-3 align-top">Published on Public Dashboard</td>
                        <td className="p-3 align-top">30 days minimum</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">3</td>
                        <td className="p-3 align-top">Stakeholder consultation</td>
                        <td className="p-3 align-top">During notice period</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">4</td>
                        <td className="p-3 align-top">Combined Trusts Board vote</td>
                        <td className="p-3 align-top">After notice period</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                        <td className="p-3 align-top font-bold">5</td>
                        <td className="p-3 align-top">Implementation</td>
                        <td className="p-3 align-top">Immediately after vote</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed font-semibold">20.2 Conflict with Constitution</p>
                <p className="leading-relaxed font-semibold">Any amendment that conflicts with Article LIX or any other provision of the Constitution shall be null and void.</p>
                <p className="leading-relaxed font-semibold">CLOSING</p>
                <p className="leading-relaxed">Jowih Credits are a non-speculative, asset-backed, government-aligned, partner-friendly digital bridge - never entering the domestic economy, with Auto-Conversion as default, Holding as optional (6 months maximum), partners handling all conversions, the Foundation earning from the Treasury Engine (float) not transaction fees, and built on neutrality, transparency, and regulatory compliance.</p>
            </CollapsibleAccordionItem>
          </CollapsibleAccordion>
        </div>
      </div>
    </div>
  );
}
