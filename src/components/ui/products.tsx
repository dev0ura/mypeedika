import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Bot, Globe, Smartphone } from 'lucide-react'
import { ReactNode } from 'react'

export function Products() {
    return (
        <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Sell Anywhere Suite</h2>
                    <p className="mt-4">Everything you need to sell everywhere — connected, consistent, and powered by AI.
                    </p>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
                    <Card className="group shadow-black-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Bot className="size-6" aria-hidden />
                            </CardDecorator>

                            <h2 className="mt-3 font-semibold">Agentic Chat</h2>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">Sell through Instagram, WhatsApp, or any messenger. AI replies instantly, understands vernacular, and handles checkout in‑chat.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-black-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Globe className="size-6" aria-hidden />
                            </CardDecorator>

                            <h2 className="mt-3 font-semibold">Web Store</h2>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">Launch a stunning, fully‑customised online store. Your style, your theme, your brand — built to convert.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-black-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Smartphone className="size-6" aria-hidden />
                            </CardDecorator>

                            <h2 className="mt-3 font-semibold">Native Mobile Apps</h2>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">Reach mobile‑first customers with beautiful iOS and Android apps. Branded your way and shipped to the stores.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div aria-hidden className="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
        <div className="absolute inset-0 [--border:black] dark:[--border:white] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"/>
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l">{children}</div>
    </div>
)

export default Products


