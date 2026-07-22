import { RiGraduationCapFill } from '@remixicon/react'
import Navbar from '../../Navbar'
import Sidebar from '../../Sidebar'
import Header from '../../Header'
import PageContainer from '../../Layout/PageContainer'

const invoiceItems = [
    { no: 1, item: 'Origin License', description: 'Extended License', unitCost: '999.00', qty: 1, total: '999.00' },
    { no: 2, item: 'Custom Services', description: 'Instalation and Customization (cost per hour)', unitCost: '150.00', qty: 20, total: '3,000.00' },
    { no: 3, item: 'Hosting', description: '1 year subcription', unitCost: '499.00', qty: 1, total: '499.00' },
    { no: 4, item: 'Platinum Support', description: '1 year subcription 24/7', unitCost: '3,999.00', qty: 1, total: '3,999.00' },
]

const Invoice = () => {
    return (
        <div className="w-screen h-screen bg-[#F2F2F3]">
            <Navbar />
            <Sidebar />
            <PageContainer>
                <Header parentTitle="Hi, welcome back!" subtitle="Your business dashboard template" childTitle="Shop" grandChildTitle="Invoice" />

                <div className="bg-white rounded mt-6 p-6 sm:p-8">
                    {/* ===== Top bar: Invoice / Date / Status ===== */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-5">
                        <span className="text-[13px]  text-[#1a1a1a]">Invoice</span>
                        <span className="text-[14px] font-bold text-[#1a1a1a]">09/10/2023</span>
                        <span className="text-[14px] text-[#1a1a1a]">
                            <span className="font-bold">Status:</span> Pending
                        </span>
                    </div>

                    <div className="-ml-8 -mr-8 border-t border-[#e7dfe1]" />

                    {/* ===== From / To / Logo & Payment ===== */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1.8fr] py-8 text-[14px]">
                        <div>
                            <p className="font-bold text-[#1a1a1a] mb-2">From:</p>
                            <p className="font-bold text-[#1a1a1a]">Webz Poland</p>
                            <p className="text-[#888888]">Madalinskiego 8</p>
                            <p className="text-[#888888]">71-101 Szczecin, Poland</p>
                            <p className="text-[#888888]">Email: info@webz.com.pl</p>
                            <p className="text-[#888888]">Phone: +48 444 666 3333</p>
                        </div>
                        <div>
                            <p className="font-bold text-[#1a1a1a] mb-2">To:</p>
                            <p className="font-bold text-[#1a1a1a]">Bob Mart</p>
                            <p className="text-[#888888]">Attn: Daniel Marek</p>
                            <p className="text-[#888888]">43-190 Mikolow, Poland</p>
                            <p className="text-[#888888]">Email: marek@daniel.com</p>
                            <p className="text-[#888888]">Phone: +48 123 456 789</p>
                        </div>
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <div className="flex items-center gap-5 mb-3">
                                    <RiGraduationCapFill className="text-[#6A73FA]" size={60} />
                                    <img src="https://edumin.dexignlab.com/xhtml/images/logo-text.png" alt="" />
                                </div>
                                <p className="text-[#888888] text-[13px]">Please send exact amount:</p>
                                <p className="font-bold text-[#1a1a1a] text-[14px]">0.15050000 BTC</p>
                                <p className="font-bold text-[#1a1a1a] text-[14px] break-all max-w-[230px]">1DonateWffyhwAjskoEwXt83pHZxhLTr8H</p>
                                <p className="text-[#a9a9a9] text-[12px] mt-1">Current exchange rate: 1BTC = $6590 USD</p>
                            </div>
                            <img
                                src="https://api.qrserver.com/v1/create-qr-code/?size=110x110&data=1DonateWffyhwAjskoEwXt83pHZxhLTr8H"
                                alt="Payment QR code"
                                className="w-[100px] h-[100px] shrink-0"
                            />
                        </div>
                    </div>

                    {/* ===== Items table ===== */}
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[700px] text-[14px]">
                            <thead>
                                <tr className="text-left font-bold text-[#1a1a1a]">
                                    <th className="py-3 px-2 w-[40px]">#</th>
                                    <th className="py-3 px-2">Item</th>
                                    <th className="py-3 px-2">Description</th>
                                    <th className="py-3 px-2 text-left">Unit Cost</th>
                                    <th className="py-3 px-2 text-left">Qty</th>
                                    <th className="py-3 px-2 text-left">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {invoiceItems.map((row, index) => (
                                    <tr key={row.no} className={index % 2 === 0 ? 'bg-[#f5f5f5]' : 'bg-white'}>
                                        <td className="py-3 px-2 text-[#888888]">{row.no}</td>
                                        <td className="py-3 px-2  text-[#888888] font-medium whitespace-nowrap">{row.item}</td>
                                        <td className="py-3 px-2 text-[#888888] whitespace-nowrap">{row.description}</td>
                                        <td className="py-3 px-2 text-[#888888] whitespace-nowrap">${row.unitCost}</td>
                                        <td className="py-3 px-2 text-[#888888]">{row.qty}</td>
                                        <td className="py-3 px-2 text-[#888888]  font-medium whitespace-nowrap">${row.total}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* ===== Summary ===== */}
                    <div className="flex justify-end mt-4">
                        <div className="w-full sm:w-80 text-[14px]">
                            <div className="flex items-center justify-between py-2.5 border-b border-gray-100">
                                <span className="font-bold  text-[#888888]">Subtotal</span>
                                <span className="text-[#888888]">$8,497.00</span>
                            </div>
                            <div className="flex items-center justify-between py-2.5 border-b border-gray-100">
                                <span className="text-[#888888]">Discount (20%)</span>
                                <span className="text-[#888888]">$1,699.40</span>
                            </div>
                            <div className="flex items-center justify-between py-2.5 border-b border-gray-100">
                                <span className="text-[#888888]">VAT (10%)</span>
                                <span className="text-[#888888]">$679.76</span>
                            </div>
                            <div className="flex items-start justify-between py-3">
                                <span className="font-bold  text-[#888888]">Total</span>
                                <div className="text-right">
                                    <p className="font-bold  text-[#888888]">$7,477.36</p>
                                    <p className="text-[#888888] text-[13px]">0.15050000 BTC</p>
                                </div>
                            </div>
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

export default Invoice
