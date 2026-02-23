'use client'

const ChevronRightIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
)
const CheckIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
)
const ClockIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
)
const CurrencyDollarIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
)

export default function ForBusiness() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-[#0a0a0f] to-blue-900/20" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
            <span className="text-white">Your business runs itself.</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Even when you&apos;re not there.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
            Stop working evenings and weekends. Never miss another follow-up. We set up a digital employee that handles your admin, customer follow-ups, and daily operations—24 hours a day, 7 days a week.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a 
              href="mailto:kate@sathigroup.ai?subject=Business Automation Consultation"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25 flex items-center gap-3"
            >
              Book Free Consultation
              <ChevronRightIcon className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-sm text-gray-500">
            📞 Speak with Kate personally • No salespeople • 15-minute call
          </p>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sound familiar?
            </h2>
            <p className="text-xl text-gray-400">
              The problems that keep business owners up at night
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Working weekends (again)",
                description: "You started this business for freedom, but you're working more hours than ever. Every day off gets interrupted by 'urgent' tasks."
              },
              {
                title: "Missed follow-ups cost money",
                description: "Hot leads go cold because someone forgot to call back. You know you're losing sales, but tracking everything manually is impossible."
              },
              {
                title: "Hiring headaches",
                description: "Good assistants are expensive and hard to find. Training takes forever, and they still make mistakes or leave for better opportunities."
              },
              {
                title: "Drowning in admin",
                description: "Scheduling, invoicing, follow-ups, customer service—it never ends. You spend more time on paperwork than growing your business."
              },
              {
                title: "Nothing happens without you",
                description: "Take a vacation? Ha. The business stops when you stop. Every decision, every task waits for your approval."
              },
              {
                title: "Falling behind competitors",
                description: "Other businesses seem to run smoother, respond faster, and grow quicker. You're working harder but falling behind."
              }
            ].map((pain, index) => (
              <div key={index} className="bg-[#12121a] p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-semibold text-white mb-4">{pain.title}</h3>
                <p className="text-gray-400 leading-relaxed">{pain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-900/10 to-blue-900/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What if your business ran itself?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We set up a digital employee that handles your repetitive tasks, follows up with customers, manages your schedule, and keeps your operations running smoothly—without sick days, vacation requests, or salary negotiations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Your digital employee handles:</h3>
              <div className="space-y-6">
                {[
                  "Customer follow-ups and appointment reminders",
                  "Lead qualification and initial sales conversations",
                  "Scheduling and calendar management",
                  "Invoice generation and payment follow-ups",
                  "Customer service and support tickets",
                  "Data entry and record keeping",
                  "Email management and responses",
                  "Social media posting and engagement"
                ].map((task, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckIcon className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{task}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-[#12121a] p-8 rounded-xl border border-gray-800">
              <h4 className="text-xl font-semibold text-white mb-6">The result?</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <ClockIcon className="w-6 h-6 text-blue-400" />
                  <span className="text-gray-300"><strong className="text-white">40+ hours</strong> back in your week</span>
                </div>
                <div className="flex items-center gap-3">
                  <CurrencyDollarIcon className="w-6 h-6 text-green-400" />
                  <span className="text-gray-300"><strong className="text-white">Zero missed</strong> follow-ups or opportunities</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckIcon className="w-6 h-6 text-purple-400" />
                  <span className="text-gray-300">Business runs while you <strong className="text-white">actually take breaks</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How it works
            </h2>
            <p className="text-xl text-gray-400">
              Simple setup. Immediate results. No technical knowledge required.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "We learn your business",
                description: "Kate spends time understanding your processes, customer interactions, and daily tasks. No forms to fill out—just a conversation about how you currently work."
              },
              {
                step: "2", 
                title: "We set everything up",
                description: "Our team builds and configures your digital employee to handle your specific needs. You don't touch any technology—we handle all the technical setup."
              },
              {
                step: "3",
                title: "Your business runs itself",
                description: "Watch as tasks get done automatically, customers get responses instantly, and you finally have time to focus on growth instead of daily operations."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-900/10 to-blue-900/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The math is simple
            </h2>
            <p className="text-xl text-gray-400">
              Compare the true cost of hiring vs. automation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional Hiring */}
            <div className="bg-red-900/20 border border-red-500/30 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-red-400">❌</span>
                Hiring an Assistant
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Salary (part-time)</span>
                  <span className="text-white font-semibold">$2,500/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Benefits &amp; taxes</span>
                  <span className="text-white font-semibold">$500/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Training time</span>
                  <span className="text-white font-semibold">20+ hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Mistakes &amp; sick days</span>
                  <span className="text-white font-semibold">Ongoing cost</span>
                </div>
                <hr className="border-red-500/30" />
                <div className="flex justify-between text-xl font-bold">
                  <span className="text-red-400">Total monthly cost</span>
                  <span className="text-red-400">$3,000+</span>
                </div>
              </div>
            </div>

            {/* Our Solution */}
            <div className="bg-green-900/20 border border-green-500/30 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-green-400">✅</span>
                Digital Employee
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Setup &amp; configuration</span>
                  <span className="text-white font-semibold">One-time</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Monthly service</span>
                  <span className="text-white font-semibold">$997/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Training time</span>
                  <span className="text-white font-semibold">0 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sick days &amp; mistakes</span>
                  <span className="text-white font-semibold">Never</span>
                </div>
                <hr className="border-green-500/30" />
                <div className="flex justify-between text-xl font-bold">
                  <span className="text-green-400">Total monthly cost</span>
                  <span className="text-green-400">$997</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-[#12121a] p-6 rounded-xl border border-gray-800 max-w-2xl mx-auto">
              <h4 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                Save $2,000+ per month
              </h4>
              <p className="text-gray-400">
                Plus get back 40+ hours of your time every week. That&apos;s time you can spend with family, growing your business, or actually taking a vacation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Stop working <em>in</em> your business.
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Start working <em>on</em> it.</span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Book a 15-minute call with Kate. No sales pitch—just an honest conversation about whether this makes sense for your business.
          </p>
          
          <a 
            href="mailto:kate@sathigroup.ai?subject=Business Automation Consultation&body=Hi Kate,%0D%0A%0D%0AI'm interested in learning more about how you can help automate my business operations. %0D%0A%0D%0AMy business: %0D%0AMain challenges: %0D%0ABest time to call: %0D%0A%0D%0AThanks!"
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-12 py-6 rounded-xl font-semibold text-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25 inline-flex items-center gap-4"
          >
            Book Your Free Consultation
            <ChevronRightIcon className="w-6 h-6" />
          </a>
          
          <p className="text-sm text-gray-500 mt-8">
            kate@sathigroup.ai • Usually responds within 2 hours
          </p>
        </div>
      </section>
    </main>
  )
}
