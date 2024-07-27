import { CustomButton } from "@/components/ui/CustomButton";
import { CustomInput } from "@/components/ui/CustomInput";
import { BlogCard } from "@/components/blog/BlogCard";
import { CustomIcon } from "@/components/ui/CustomIcon";
import { HeroIcons } from "@/types/coreTypes";
import Image from "next/image";
import { QuestionAccordion } from "@/components/ui/QuestionAccordion";
import blogs from '@/json/blogs.json';
import FAQ from '@/json/FAQ.json';

export default function HomePage() {
  const clients : {label: string, icon: HeroIcons}[] = [
    { label: "Noviexar", icon:'SwatchIcon' },
    { label: "skyewave" , icon: 'SparklesIcon'},
    { label: "NexaCore" , icon: 'ScaleIcon'},
    { label: "EliteXcel", icon:'Square3Stack3DIcon' },
    { label: "Zenithron" , icon:'ViewColumnsIcon'},
    { label: "Ennovatek" , icon: 'H3Icon'},
    { label: "Inifinitumix" ,icon: 'GlobeAmericasIcon'},
    { label: "SpectraFuse" , icon: 'CpuChipIcon'},
  ];
  const features = [{ label: "Unlimited Pages" }, { label: "Easy Access" }, { label: "14-days-trial" }];
  const benefits = [
    { label: "Project Structure", description: "Check out our proven methods, guides, and exercises that help make work better, and people happier.", icon: "CheckCircleIcon" },
    { label: "Resonsive", description: "The design system and UI kit is coming with full-responsive screens for tablet and mobile devices", icon: "DevicePhoneMobileIcon" },
    { label: "Messaging", description: "On mobile, customers can send text, or audio messages to agents, like using any messaging app", icon: "EnvelopeOpenIcon" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="c-section flex justify-between items-center gap-8">
        <div className="w-6/12">
          <h1 className="c-title-lg">Everything you need to scale a global team</h1>
          <p className="mt-4 c-text-gray c-paragraph w-11/12">Check out our proven methods, guides, and exercises that help make work better, and people happier.</p>
          <div className="mt-12 flex items-center gap-4">
            <CustomButton label="Learn More" />
            <CustomButton label="Watch Demo" icon="PlayCircleIcon" variant="outlined" />
          </div>

          <p className="mt-8 c-text-gray">Trusted by over than 1M customers</p>
          <div className="mt-2 flex gap-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <CustomIcon key={index} name="StarIcon" />
            ))}
          </div>
        </div>

        <div className="w-6/12 relative min-h-[80vh]">
          <Image className="rounded-md w-full object-cover" src="/imgs/hero.jpg" alt="hero" fill sizes="" />
        </div>
      </section>

      {/* Benefits */}
      <section className="pt-24 c-section">
        <h2 className="c-title text-center">Our key benefits</h2>
        <p className="mt-2 c-text-gray text-center">Our services are designed to cater to your specific needs and goals.</p>
        <div className="pt-20 flex items-center gap-4">
          <div className="flex flex-col w-6/12 gap-8">
            {benefits.map((item) => (
              <div className="" key={item.label}>
                <CustomIcon name={item.icon as HeroIcons} />
                <h2 className="mt-2 c-title-sm font-semibold">{item.label}</h2>
                <p className="mt-2 c-text-gray c-paragraph">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 grid-rows-12 gap-8 w-6/12 min-h-[500px]">
            <div className="row-start-1 row-end-9 bg-cover rounded-md relative">
              <Image className="rounded-md object-cover" sizes="" src="/imgs/dummy-benefit1.jpg" fill alt="dummy" />
            </div>
            <div className="bg-cover rounded-md row-start-9 row-end-13 relative">
              <Image className="rounded-md object-cover" sizes="" src="/imgs/dummy-benefit2.jpg" fill alt="dummy" />
            </div>
            <div className="bg-cover rounded-md relative row-start-1 row-end-5">
              <Image className="rounded-md object-cover" sizes="" src="/imgs/dummy-benefit3.jpg" fill alt="dummy" />
            </div>
            <div className="row-start-5 row-end-13 bg-cover rounded-md relative">
              <Image className="rounded-md object-cover" sizes="" src="/imgs/dummy-benefit4.jpg" fill alt="dummy" />
            </div>
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section className="c-section flex flex-col justify-center">
        <h2 className="c-title text-center"> Streamline your workflow with Saas: Get started now</h2>
        <p className="mt-3 text-center c-paragraph c-text-gray">Stay up to date with the most relevant information</p>
        <ul className="mt-8 flex justify-center gap-4">
          {features.map((item) => (
            <li className="p-4 flex items-center gap-2 c-paragraph" key={item.label}>
              <CustomIcon name="CheckBadgeIcon" /> {item.label}
            </li>
          ))}
        </ul>
        <div className="mt-10 flex items-center justify-center gap-4">
          <CustomButton label="Get Started" />
          <CustomButton label="Watch Demo" icon="PlayCircleIcon" variant="outlined" />
        </div>
      </section>

      {/* FAQ */}
      <section className="c-section">
        <h2 className="c-title text-center">Frequently Asked Questions</h2>
        <p className="mt-3 text-center c-paragraph c-text-gray">We tried to answer most of the questions, if you have any additional, please get in touch with our friendly team</p>

        <div className="mt-12 w-[50vw] mx-auto flex flex-col gap-4">
          {FAQ.map((item, i) => (
            <QuestionAccordion key={i} question={item.question} ans={item.ans} />
          ))}
        </div>

        <div className="mt-10 text-center border border-blue-50 bg-blue-50 p-4 rounded-md w-6/12 mx-auto">
          <h2 className="font-semibold text-xl">Still have questions?</h2>
          <p className="mt-2 c-text-gray c-paragraph">
            We&apos;re sorry we couldn&apos;t provide with the information you were looking for. Please contact us and we&apos;ll be happy to help.
          </p>
          <div className="mt-8 flex justify-center">
            <CustomButton label="Contact Us" icon="EnvelopeIcon" />
          </div>
        </div>
      </section>

      {/* News */}
      <section className="pt-32 c-section">
        <h2 className="c-title text-center">Our Fresh News</h2>
        <p className="mt-2 c-text-gray text-center">
          Our blog is more than just a collection of articles - it&apos;s a hub of ideas, inspiration, and thought-provoking discussions
        </p>
        <div className="mt-8 flex gap-4">
          {blogs.map((item, i) => (
            <BlogCard key={i} data={item} />
          ))}
        </div>
      </section>

      {/* Email */}
      <section className="pt-16 flex flex-col justify-center">
        <div className="bg-blue-50 rounded-2xl p-12">
          <div className="w-6/12">
            <p className="c-title">Enter your email and get started for free</p>
            <p className="mt-4 c-text-gray">Stay up to date with the most relevant information, our new collections, news and special offers!</p>
            <div className="mt-8 flex items-center gap-4">
              <CustomInput placeholder="Enter your email" className="w-full" />
              <CustomButton label="Subscribe" />
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="min-h-[calc(100vh-74px-349px)] pt-28">
        <h2 className="c-title text-center">Our Clients</h2>
        <div className="mt-8 flex flex-wrap items-center justify-center">
         {clients.map((item) => (
            <div key={item.label} className="text-xl p-4 w-3/12 flex items-center gap-3">
              < CustomIcon name={item.icon}/>
              	<span className="text-2xl">
					{item.label}
				</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
