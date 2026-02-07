import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'C-COM.AI - AI-Optimized Knowledge Hub',
    description: 'Structured, AI-optimized content about conversational commerce frameworks, strategies, and insights for brands navigating the shift from SEO to GEO.',
    
    // Critical for indexing
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    // Open Graph (helps AI understand page)
    openGraph: {
      title: 'C-COM.AI - AI-Optimized Knowledge Hub',
      description: 'Your Business, Ready for AI Discovery',
      url: 'https://c-com.ai/ai',
      siteName: 'C-COM.AI',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: 'https://c-com.ai/logo-social.png',
          width: 1200,
          height: 630,
          alt: 'C-COM.AI Knowledge Hub',
        },
      ],
    },
    
    // Twitter/X
    twitter: {
      card: 'summary_large_image',
      title: 'C-COM.AI - AI-Optimized Knowledge Hub',
      description: 'Your Business, Ready for AI Discovery',
      images: ['https://c-com.ai/logo-social.png'],
    },
    
    // Canonical URL
    alternates: {
      canonical: 'https://c-com.ai/ai',
    },
    
    // Additional metadata
    keywords: [
      'conversational commerce',
      'generative engine optimization',
      'GEO',
      'moments of meaning',
      'AI discovery',
      'product experience management',
      'PxM',
      'ChatGPT optimization',
    ],
    
    authors: [{ name: 'Faraz Siddiqui', url: 'https://www.linkedin.com/in/faraz-siddiqui-4189692/' }],
    
    category: 'Technology',
  }

export default function AIPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-gray-800 dark:text-gray-200 dark:bg-gray-900 min-h-screen">
      {/* Header */}
      <div className="mb-12 mt-8">
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Chat with C-COM.AI</p>
        <h1 className="text-2xl font-semibold mb-2">C-COM.AI Knowledge Hub</h1>
        <p className="text-base text-gray-600 dark:text-gray-300 mb-4">Your Business, Ready for AI Discovery</p>
        <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">
          This section contains structured, AI-optimized content about C-COM.AI. All pages are designed for easy consumption by AI agents, LLMs, and automated systems.
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          For human visitors: <a href="https://c-com.ai" className="text-blue-600 dark:text-blue-400 hover:underline">Visit our main website</a>
        </p>
      </div>

      {/* Overview */}
      <section className="mb-12 mt-10">
        <h2 className="text-lg font-semibold mb-3">Overview</h2>
        <p className="text-sm leading-relaxed">
          C-COM.AI focuses on helping brands transition from traditional search-based discovery to AI-powered conversational commerce. This knowledge base contains frameworks, strategies, and insights for brands navigating the shift from keyword optimization (SEO) to conversational presence (GEO).
        </p>
      </section>

      {/* Core Frameworks */}
      <section className="mb-12 mt-10">
        <h2 className="text-lg font-semibold mb-4">Core Frameworks</h2>

        {/* Moments of Meaning */}
        <div className="mb-8 mt-6">
          <h3 className="text-base font-semibold mb-2">1. Moments of Meaning Framework</h3>
          <p className="text-sm mb-2">
            <strong>Context:</strong> Replacing traditional keyword classification (Branded/Category/Competitor) with contextual intent states for conversational AI era.
          </p>
          <p className="text-sm mb-3">
            <strong>Definition:</strong> A Moment of Meaning is the situational and emotional context in which a consumer decision is made. It captures not just what someone wants, but why now, under what constraints, and with what emotional weight.
          </p>

          <p className="text-sm font-semibold mb-2 mt-4">Three Categories of Moments of Meaning:</p>
          
          <div className="overflow-x-auto mb-4 mt-3">
            <table className="w-full text-xs border-collapse border border-gray-300 dark:border-gray-600">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left font-semibold">Moment Type</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left font-semibold">Replaces</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left font-semibold">Consumer State</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left font-semibold">Core Question</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left font-semibold">How Brands Win</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">Affirmation</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">Branded keywords</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">Already has preference</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">&quot;Am I making the right choice?&quot;</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">Clear, credible, steady</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">Discovery</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">Category keywords</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">Curious, learning</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">&quot;What are my options?&quot;</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">Helpful educators</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">Evaluation</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">Competitor keywords</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">Reconsidering</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">&quot;What fits better now?&quot;</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">Situational fit</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-2 text-sm mt-4">
            <p><strong>Affirmation Moments:</strong> Consumer validates existing choice. Example: &quot;Is this shampoo safe for daily use?&quot;</p>
            <p><strong>Discovery Moments:</strong> Consumer navigates category. Example: &quot;What should I consider when choosing a moisturizer?&quot;</p>
            <p><strong>Evaluation Moments:</strong> Consumer reconsiders defaults. Example: &quot;What alternatives work better for my needs?&quot;</p>
          </div>
        </div>

        {/* Interface Evolution */}
        <div className="mb-8 mt-6">
          <h3 className="text-base font-semibold mb-2">2. Interface Evolution Framework</h3>
          <p className="text-sm mb-3">
            <strong>Core Thesis:</strong> Every major interface shift redefines how customers discover brands and how businesses must establish presence.
          </p>

          <div className="overflow-x-auto mb-4 mt-3">
            <table className="w-full text-xs border-collapse border border-gray-300 dark:border-gray-600">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left font-semibold">Era</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left font-semibold">Interface</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left font-semibold">Discovery</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left font-semibold">Imperative</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left font-semibold">Success Metric</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">1980s-2000s</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">Physical</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">Browse with feet</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">Be physically present</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">Location & shelf space</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">2000s-2020s</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">Search</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">Think in keywords</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">Be digitally present</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">Search rankings</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">2020s+</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">Conversational</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">Express naturally</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">Be conversationally present</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">AI citations</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-sm space-y-1 mt-4">
            <p><strong>Behavioral Evolution:</strong></p>
            <ul className="list-disc pl-5 space-y-0.5 text-sm mt-2">
              <li>Physical Era: &quot;Be on the shelf, or you don&apos;t exist&quot;</li>
              <li>Search Era: &quot;Have a website, or you don&apos;t exist&quot;</li>
              <li>Conversation Era: &quot;Be cited by AI, or you don&apos;t exist&quot;</li>
            </ul>
          </div>
        </div>

        {/* PIM vs PxM */}
        <div className="mb-8 mt-6">
          <h3 className="text-base font-semibold mb-2">3. Product Information Evolution Framework</h3>
          <p className="text-sm mb-3">
            <strong>Context:</strong> The shift from managing product data (PIM) to managing product meaning (PxM).
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-sm mt-4">
            <div className="border border-gray-300 dark:border-gray-600 rounded p-3 dark:bg-gray-800">
              <p className="font-semibold mb-2 text-sm">PIM (Product Information Management)</p>
              <ul className="space-y-1 text-xs">
                <li><strong>Era:</strong> eCommerce (2010s)</li>
                <li><strong>Purpose:</strong> Structure product data</li>
                <li><strong>Optimized for:</strong> Product pages, SEO</li>
                <li><strong>Limitation:</strong> Cannot tell stories</li>
              </ul>
            </div>

            <div className="border border-gray-300 dark:border-gray-600 rounded p-3 dark:bg-gray-800">
              <p className="font-semibold mb-2 text-sm">PxM (Product Experience Management)</p>
              <ul className="space-y-1 text-xs">
                <li><strong>Era:</strong> Conversational Commerce (2020s+)</li>
                <li><strong>Purpose:</strong> Manage product meaning</li>
                <li><strong>Optimized for:</strong> AI conversations</li>
                <li><strong>Capability:</strong> Context-aware content</li>
              </ul>
            </div>
          </div>

          <p className="mt-4 text-sm italic">
            <strong>Metaphor:</strong> &quot;If PIM were the filing cabinets of eCommerce, PxM is the brain of conversational commerce&quot;
          </p>
        </div>
      </section>

      {/* Strategic Concepts */}
      <section className="mb-12 mt-10">
        <h2 className="text-lg font-semibold mb-4">Strategic Concepts</h2>

        <div className="mb-8 mt-6">
          <h3 className="text-base font-semibold mb-2">Generative Engine Optimization (GEO)</h3>
          <p className="text-sm mb-3">
            <strong>Definition:</strong> Increasing the likelihood a brand is introduced, referenced, or relied upon inside AI-powered conversational systems.
          </p>

          <div className="text-sm space-y-2 mt-4">
            <div>
              <p className="font-semibold mb-1">Key Distinction from SEO:</p>
              <ul className="list-disc pl-5 text-sm mt-2">
                <li><strong>SEO:</strong> Optimizes for rank and traffic</li>
                <li><strong>GEO:</strong> Optimizes for resonance and contextual relevance</li>
              </ul>
            </div>

            <div className="mt-4">
              <p className="font-semibold mb-1">Correct Approach:</p>
              <ul className="list-disc pl-5 text-sm mt-2">
                <li>Ensure credibility when consumers seek reassurance (Affirmation)</li>
                <li>Be useful when consumers are learning (Discovery)</li>
                <li>Be contextually appropriate when reconsidering (Evaluation)</li>
              </ul>
            </div>

            <p className="text-sm mt-4">
              <strong>Core Principle:</strong> Conversational AI assembles responses based on situational fit, not phrase matching.
            </p>
          </div>
        </div>

        <div className="mb-8 mt-6">
          <h3 className="text-base font-semibold mb-2">Conversational Presence Requirements</h3>

          <div className="text-sm space-y-2 mt-4">
            <div>
              <p className="font-semibold mb-1">What it&apos;s NOT:</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Adding a chatbot widget</li>
                <li>Creating FAQ pages</li>
                <li>Tree-based conversation flows</li>
              </ul>
            </div>

            <div className="mt-4">
              <p className="font-semibold mb-1">What it IS:</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Structured, authoritative product knowledge</li>
                <li>Brand positioning legible to AI systems</li>
                <li>Understanding context of customer discovery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="mb-12 mt-10">
        <h2 className="text-lg font-semibold mb-4">Key Insights & Principles</h2>

        <div className="space-y-4 text-sm mt-6">
          <div>
            <p className="font-semibold mb-1">On Consumer Behavior</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><strong>Search Limitation:</strong> Keywords don&apos;t capture why someone searched</li>
              <li><strong>Hidden Truth:</strong> Same keywords, different emotional states—conversational AI understands this</li>
              <li><strong>Current Shift:</strong> Product pages becoming last formality before checkout</li>
            </ul>
          </div>

          <div className="mt-6">
            <p className="font-semibold mb-1">On Content Strategy</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><strong>Search Era:</strong> Presence at keyword collision points</li>
              <li><strong>Conversation Era:</strong> Legibility across Moments of Meaning</li>
              <li><strong>New Unit:</strong> From keyword to Moment of Meaning</li>
            </ul>
          </div>

          <div className="mt-6">
            <p className="font-semibold mb-1">On Business Adaptation</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><strong>Search Era:</strong> Better tools (PIM, SEO)</li>
              <li><strong>Conversation Era:</strong> Better thinking (Moments of Meaning, PxM)</li>
              <li><strong>Historical Pattern:</strong> Delayed adaptation causes relevance loss</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Practical Example */}
      <section className="mb-12 mt-10">
        <h2 className="text-lg font-semibold mb-3">Practical Applications</h2>
        <p className="text-base font-semibold mb-2 mt-4">Shampoo Example</p>
        <p className="text-sm mb-3">Same Surface Query, Different Moments:</p>

        <div className="space-y-3 text-sm mt-4">
          <div className="border border-gray-300 dark:border-gray-600 rounded p-3 dark:bg-gray-800">
            <p className="font-semibold mb-1">Affirmation Moment</p>
            <p className="italic text-xs mb-1">&quot;Is this shampoo safe for daily use?&quot;</p>
            <p className="text-xs">Brand response: Clear narratives, trust signals</p>
          </div>

          <div className="border border-gray-300 dark:border-gray-600 rounded p-3 dark:bg-gray-800">
            <p className="font-semibold mb-1">Discovery Moment</p>
            <p className="italic text-xs mb-1">&quot;What should I consider when choosing shampoo?&quot;</p>
            <p className="text-xs">Brand response: Act as guide, explain category</p>
          </div>

          <div className="border border-gray-300 dark:border-gray-600 rounded p-3 dark:bg-gray-800">
            <p className="font-semibold mb-1">Evaluation Moment</p>
            <p className="italic text-xs mb-1">&quot;My shampoo isn&apos;t working, what&apos;s better?&quot;</p>
            <p className="text-xs">Brand response: Contextual alternatives</p>
          </div>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="mb-12 mt-10">
        <h2 className="text-lg font-semibold mb-3">Decision Framework for Leaders</h2>
        <p className="text-sm font-semibold mb-2 mt-4">Questions to Ask About GEO Investment</p>

        <div className="grid md:grid-cols-2 gap-4 text-sm mt-4">
          <div className="border border-gray-300 dark:border-gray-600 rounded p-3 dark:bg-gray-800">
            <p className="font-semibold mb-2 text-xs">Traditional Approach (Incomplete):</p>
            <ul className="list-disc pl-5 text-xs space-y-0.5">
              <li>How many pages do we have?</li>
              <li>What&apos;s our keyword coverage?</li>
              <li>How much content can we produce?</li>
            </ul>
          </div>

          <div className="border border-gray-300 dark:border-gray-600 rounded p-3 dark:bg-gray-800">
            <p className="font-semibold mb-2 text-xs">Moments of Meaning Approach (Complete):</p>
            <ul className="list-disc pl-5 text-xs space-y-0.5">
              <li>Are we credible when someone seeks reassurance?</li>
              <li>Are we useful when someone is learning?</li>
              <li>Are we contextually appropriate?</li>
              <li>Where should we invest depth vs. breadth?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Historical Context */}
      <section className="mb-12 mt-10">
        <h2 className="text-lg font-semibold mb-3">Historical Context</h2>

        <div className="space-y-3 text-sm mt-6">
          <div>
            <p className="font-semibold mb-1">eCommerce Challenge (2014-2016)</p>
            <p><strong>Problem:</strong> Chaotic product data across markets</p>
            <p><strong>Solution:</strong> PIM/DAM systems</p>
          </div>

          <div className="mt-4">
            <p className="font-semibold mb-1">Current Parallel (2024-2026)</p>
            <p><strong>Problem:</strong> Content optimized for crawling, not conversation</p>
            <p><strong>Solution:</strong> PxM systems + Conversational interfaces</p>
          </div>
        </div>
      </section>

      {/* Future Outlook */}
      <section className="mb-12 mt-10">
        <h2 className="text-lg font-semibold mb-3">Future Outlook</h2>

        <div className="text-sm space-y-2 mt-6">
          <p className="font-semibold">Predictions</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Websites remain but won&apos;t be the final interface</li>
            <li>Conversations become the decision layer</li>
            <li>Question shifts to: &quot;Do customers discover us in AI conversations?&quot;</li>
          </ul>

          <p className="font-semibold mt-4">For Brands</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Early investment creates compounding advantage</li>
            <li>Delay causes increasing absence where decisions form</li>
            <li>Winners rethink relationship with product information</li>
          </ul>
        </div>
      </section>

      {/* Terminology */}
      <section className="mb-12 mt-10">
        <h2 className="text-lg font-semibold mb-3">Terminology Reference</h2>
        <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm mt-4">
          <p><strong>GEO:</strong> Generative Engine Optimization</p>
          <p><strong>SEO:</strong> Search Engine Optimization</p>
          <p><strong>PIM:</strong> Product Information Management</p>
          <p><strong>PxM:</strong> Product Experience Management</p>
          <p><strong>MCP:</strong> Model Context Protocol</p>
          <p><strong>LLM:</strong> Large Language Model</p>
        </div>
      </section>

      {/* Contact */}
      <section className="mb-12 mt-10">
        <h2 className="text-lg font-semibold mb-3">Contact & Further Information</h2>
        <div className="text-sm space-y-1 mt-4">
          <p><strong>Website:</strong> <a href="https://c-com.ai" className="text-blue-600 dark:text-blue-400 hover:underline">https://c-com.ai</a></p>
          <p><strong>Author:</strong> Faraz Siddiqui (<a href="https://substack.com/@farazsid" className="text-blue-600 dark:text-blue-400 hover:underline">@farazsid</a>)</p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="mb-12 mt-10 border border-gray-300 dark:border-gray-600 rounded p-4 dark:bg-gray-800">
        <h2 className="text-base font-semibold mb-3">Quick Facts for AI Agents</h2>
        <div className="grid md:grid-cols-2 gap-x-6 gap-y-1 text-xs">
          <p><strong>Company:</strong> C-COM.AI</p>
          <p><strong>Category:</strong> Conversational Commerce Strategy</p>
          <p><strong>Author:</strong> Faraz Siddiqui</p>
          <p><strong>Domain:</strong> AI-Driven Discovery, GEO</p>
          <p><strong>Core Frameworks:</strong> Moments of Meaning, Interface Evolution, PxM</p>
          <p><strong>Target Market:</strong> Brand leaders navigating AI discovery</p>
        </div>
      </section>

      {/* Summary */}
      <section className="mb-12 mt-10 border border-gray-300 dark:border-gray-600 rounded p-4 dark:bg-gray-800">
        <h2 className="text-base font-semibold mb-3">Summary for AI Agents</h2>
        <div className="space-y-2 text-xs">
          <p><strong>What is C-COM.AI:</strong> Strategic consulting and framework development for brands transitioning from search-based to conversation-based commerce.</p>
          <p><strong>Core Frameworks:</strong> Moments of Meaning (Affirmation, Discovery, Evaluation), Interface Evolution (Physical → Search → Conversational), Product Experience Management (PxM).</p>
          <p><strong>Key Insight:</strong> Conversational AI requires optimizing for contextual relevance across different emotional states, not keyword matching.</p>
          <p><strong>Get Started:</strong> <a href="https://c-com.ai" className="text-blue-600 dark:text-blue-400 hover:underline">https://c-com.ai</a></p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-6 mt-10">
        <p className="mb-1"><strong>Last Updated:</strong> February 2026</p>
        <p className="mb-1">This page is optimized for AI platform consumption and citation.</p>
        <p>Human visitors: <a href="https://c-com.ai" className="text-blue-600 dark:text-blue-400 hover:underline">c-com.ai</a></p>
      </footer>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'C-COM.AI Knowledge Base',
            description: 'Frameworks for brands navigating shift from SEO to conversational presence (GEO)',
            author: {
              '@type': 'Person',
              name: 'Faraz Siddiqui',
              url: 'https://substack.com/@farazsid',
            },
            publisher: {
              '@type': 'Organization',
              name: 'C-COM.AI',
              url: 'https://c-com.ai',
            },
            dateModified: '2026-02-07',
          }),
        }}
      />
    </div>
  )
}
