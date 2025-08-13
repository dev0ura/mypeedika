import { MessageSquare, Languages, ShoppingCart, BadgeCheck, Users, BarChart3 } from 'lucide-react'

export function Features() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">Why Sellers Choose The Peedika</h2>
                    <p>Seamlessly manage your sales, inventory, and customer experience — from one central backend, no matter where you sell.</p>
                </div>

                <div className="relative mx-auto grid max-w-2xl lg:max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <MessageSquare className="size-5" />
                            <h3 className="text-sm font-medium">No More, <br /> DM Chaos</h3>
                        </div>
                        <p className="text-sm">AI handles Instagram and WhatsApp customer replies instantly.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Languages className="size-5" />
                            <h3 className="text-sm font-medium">Speak The <br />  Language</h3>
                        </div>
                        <p className="text-sm">Understand mixed vernacular messages naturally and accurately.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <ShoppingCart className="size-5" />
                            <h3 className="text-sm font-medium">In Chat <br /> Checkout</h3>
                        </div>
                        <p className="text-sm">Share payment link, confirm orders without leaving chat.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <BadgeCheck className="size-5" />
                            <h3 className="text-sm font-medium">Instant Payment <br /> Confirmation</h3>
                        </div>
                        <p className="text-sm">Payments verified in-chat, no manual checking needed.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Users className="size-5" />
                            <h3 className="text-sm font-medium">Centralised <br /> Customer Management</h3>
                        </div>
                        <p className="text-sm">Track all conversations and orders in one place.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <BarChart3 className="size-5" />
                            <h3 className="text-sm font-medium">Powerful <br /> Backend Tools</h3>
                        </div>
                        <p className="text-sm">Analytics, inventory, and product management built-in.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}


