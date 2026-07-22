import { useState } from 'react'
import Navbar from '../../Navbar'
import Sidebar from '../../Sidebar'
import Header from '../../Header'
import PageContainer from '../../Layout/PageContainer'

const cartItems = [
    { name: 'Product name', desc: 'Brief description', price: 12 },
    { name: 'Second product', desc: 'Brief description', price: 8 },
    { name: 'Third item', desc: 'Brief description', price: 5 },
]

const inputClass = "w-full border border-gray-200 rounded px-4 py-2.5 text-[14px] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30 focus:border-[#6A73FC]"
const labelClass = "text-[14px] font-semibold text-[#1a1a1a] mb-2 block"

const Checkout = () => {
    const [payment, setPayment] = useState('credit')
    const [sameAddress, setSameAddress] = useState(false)
    const [saveInfo, setSaveInfo] = useState(false)

    const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0)
    const promoDiscount = 5
    const total = subtotal - promoDiscount

    return (
        <div className="w-screen h-screen bg-[#F2F2F3]">
            <Navbar />
            <Sidebar />
            <PageContainer>
                <Header parentTitle="Hi, welcome back!" subtitle="Your business dashboard template" childTitle="Shop" grandChildTitle="Checkout" />

                <div className="bg-white rounded mt-6 p-6 sm:p-8 flex flex-col lg:flex-row gap-10">
                    {/* Left: Billing / Payment */}
                    <div className="w-full lg:w-[68%]">
                        <h2 className="text-[18px] font-bold mb-6">Billing address</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label className={labelClass}>First name</label>
                                <input type="text" placeholder="First name" className={inputClass} />
                            </div>
                            <div>
                                <label className={labelClass}>Last name</label>
                                <input type="text" placeholder="Last name" className={inputClass} />
                            </div>
                        </div>

                        <div className="mt-5">
                            <label className={labelClass}>Username</label>
                            <div className="flex">
                                <span className="flex items-center justify-center px-4 border border-r-0 border-gray-200 rounded-l bg-gray-50 text-gray-400 text-[14px]">@</span>
                                <input type="text" placeholder="Username" className={`${inputClass} rounded-l-none`} />
                            </div>
                            <p className="text-red-500 text-[13px] mt-1.5">Your username is required.</p>
                        </div>

                        <div className="mt-5">
                            <label className={labelClass}>Email <span className="font-normal text-gray-400">(Optional)</span></label>
                            <input type="email" placeholder="you@example.com" className={inputClass} />
                        </div>

                        <div className="mt-5">
                            <label className={labelClass}>Address</label>
                            <input type="text" placeholder="1234 Main St" className={inputClass} />
                        </div>

                        <div className="mt-5">
                            <label className={labelClass}>Address 2 <span className="font-normal text-gray-400">(Optional)</span></label>
                            <input type="text" placeholder="Apartment or suite" className={inputClass} />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-5">
                            <div>
                                <label className={labelClass}>Country</label>
                                <select className={`${inputClass} bg-white appearance-none`} defaultValue="">
                                    <option value="" disabled>Choose...</option>
                                    <option value="us">United States</option>
                                    <option value="pk">Pakistan</option>
                                    <option value="uk">United Kingdom</option>
                                </select>
                            </div>
                            <div>
                                <label className={labelClass}>State</label>
                                <select className={`${inputClass} bg-white appearance-none`} defaultValue="">
                                    <option value="" disabled>Choose...</option>
                                    <option value="ca">California</option>
                                    <option value="ny">New York</option>
                                    <option value="tx">Texas</option>
                                </select>
                            </div>
                            <div>
                                <label className={labelClass}>Zip</label>
                                <input type="text" className={inputClass} />
                            </div>
                        </div>

                        <div className="border-t border-gray-300 mt-7 pt-6 space-y-3">
                            <label className="flex items-center gap-2.5 text-[14px] text-gray-700 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={sameAddress}
                                    onChange={() => setSameAddress(!sameAddress)}
                                    className="w-4 h-4 rounded border-gray-300 accent-[#6A73FC] cursor-pointer"
                                />
                                Shipping address is the same as my billing address
                            </label>
                            <label className="flex items-center gap-2.5 text-[14px] text-gray-700 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={saveInfo}
                                    onChange={() => setSaveInfo(!saveInfo)}
                                    className="w-4 h-4 rounded border-gray-300 accent-[#6A73FC] cursor-pointer"
                                />
                                Save this information for next time
                            </label>
                        </div>

                        <div className="border-t border-gray-300 mt-6 pt-6">
                            <h2 className="text-[18px] font-bold mb-4">Payment</h2>

                            <div className="space-y-3 mb-6">
                                {[
                                    { id: 'credit', label: 'Credit card' },
                                    { id: 'debit', label: 'Debit card' },
                                    { id: 'paypal', label: 'Paypal' },
                                ].map((option) => (
                                    <label key={option.id} className="flex items-center gap-2.5 text-[14px] text-gray-700 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="payment"
                                            checked={payment === option.id}
                                            onChange={() => setPayment(option.id)}
                                            className="w-4 h-4 accent-[#6A73FC] cursor-pointer"
                                        />
                                        {option.label}
                                    </label>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className={labelClass}>Name on card</label>
                                    <input type="text" className={inputClass} />
                                    <p className="text-gray-400 text-[13px] mt-1.5">Full name as displayed on card</p>
                                </div>
                                <div>
                                    <label className={labelClass}>Credit card number</label>
                                    <input type="text" className={inputClass} />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-5">
                                <div>
                                    <label className={labelClass}>Expiration</label>
                                    <input type="text" className={inputClass} />
                                </div>
                                <div>
                                    <label className={labelClass}>CVV</label>
                                    <input type="text" className={inputClass} />
                                </div>
                            </div>
                        </div>

                        <button className="w-full mt-8 bg-[#6A73FC] hover:bg-[#5961e0] text-white font-semibold text-[15px] py-3.5 rounded transition-colors cursor-pointer">
                            Continue to checkout
                        </button>
                    </div>

                    {/* Right: Cart summary */}
                    <div className="w-full lg:w-[32%]">
                        <div className="flex items-center justify-between gap-2 mb-4">
                            <h2 className="text-[18px] font-bold">Your cart</h2>
                            <span className="bg-[#6A73FC] text-white text-[12px] font-semibold w-6 h-6 rounded-full flex items-center justify-center">{cartItems.length}</span>
                        </div>

                        <div className="border border-gray-100 rounded overflow-hidden">
                            {cartItems.map((item, i) => (
                                <div key={i} className="flex items-center justify-between px-4 py-3.5 border-b border-gray-100">
                                    <div>
                                        <p className="text-[14px] font-semibold">{item.name}</p>
                                        <p className="text-[12px] text-gray-400">{item.desc}</p>
                                    </div>
                                    <span className=" text-[14px] font-medium">${item.price}</span>
                                </div>
                            ))}

                            <div className="flex items-center justify-between px-4 py-3.5 bg-[#6A73FC] text-white">
                                <div>
                                    <p className="text-[14px] font-semibold">Promo code</p>
                                    <p className="text-[12px] text-white/70">EXAMPLECODE</p>
                                </div>
                                <span className="text-[14px] font-medium">-${promoDiscount}</span>
                            </div>

                            <div className="flex items-center justify-between px-4 py-3.5">
                                <p className="text-[14px] font-semibold">Total (USD)</p>
                                <span className="text-[14px] font-bold">${total}</span>
                            </div>
                        </div>

                        <div className="flex items-stretch mt-4 border border-gray-200 rounded overflow-hidden focus-within:ring-2 focus-within:ring-[#6A73FC]/30">
                            <input type="text" placeholder="Promo code" className="flex-1 px-4 py-2.5 text-[14px] placeholder-gray-400 outline-none" />
                            <button className="bg-[#6A73FC] hover:bg-[#5961e0] text-white text-[14px] font-semibold px-5 rounded-none transition-colors cursor-pointer whitespace-nowrap">
                                Redeem
                            </button>
                        </div>
                    </div>
                </div>

                <footer className="text-center pt-[4em] pb-[0.5em] text-sm text-gray-500">
                    <p>Copyright © Designed & Developed by <a className="text-[#6a73fa] cursor-pointer">DexignLab</a> 2023</p>
                </footer>
            </PageContainer>
        </div>
    )
}

export default Checkout
