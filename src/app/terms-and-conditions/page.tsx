// app/terms-of-use/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms of Use | AquaRide Ghana",
  description:
    "AquaRide Ghana Terms of Use — read our legal terms and conditions for using our services.",
};

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-16">
        <style>{`
          [data-custom-class='body'], [data-custom-class='body'] * {
            background: transparent !important;
          }
          [data-custom-class='title'], [data-custom-class='title'] * {
            font-family: Arial !important;
            font-size: 26px !important;
            color: #000000 !important;
          }
          [data-custom-class='subtitle'], [data-custom-class='subtitle'] * {
            font-family: Arial !important;
            color: #595959 !important;
            font-size: 14px !important;
          }
          [data-custom-class='heading_1'], [data-custom-class='heading_1'] * {
            font-family: Arial !important;
            font-size: 19px !important;
            color: #000000 !important;
          }
          [data-custom-class='heading_2'], [data-custom-class='heading_2'] * {
            font-family: Arial !important;
            font-size: 17px !important;
            color: #000000 !important;
          }
          [data-custom-class='body_text'], [data-custom-class='body_text'] * {
            color: #595959 !important;
            font-size: 14px !important;
            font-family: Arial !important;
          }
          [data-custom-class='link'], [data-custom-class='link'] * {
            color: #3030F1 !important;
            font-size: 14px !important;
            font-family: Arial !important;
            word-break: break-word !important;
          }
          ul { list-style-type: square; }
          ul > li > ul { list-style-type: circle; }
          ul > li > ul > li > ul { list-style-type: square; }
          ol li { font-family: Arial; }
        `}</style>

        <div data-custom-class="body">

          {/* Title */}
          <div data-custom-class="title" style={{ lineHeight: "1.5" }}>
            <h1><strong>TERMS OF USE</strong></h1>
          </div>
          <div data-custom-class="subtitle" style={{ lineHeight: "1.5" }}>
            <strong>Last updated __________</strong>
          </div>
          <br />
          <br />

          {/* Agreement Heading */}
          <div style={{ lineHeight: "1.5" }}>
            <strong><span data-custom-class="heading_1"><h2>AGREEMENT TO OUR LEGAL TERMS</h2></span></strong>
          </div>

          {/* Agreement Body */}
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px" }}>
              We are <strong>__________</strong> (&quot;<strong>Company</strong>,&quot; &quot;<strong>we</strong>,&quot; &quot;<strong>us</strong>,&quot; &quot;<strong>our</strong>&quot;).
            </span>
          </div>
          <br />
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px" }}>
              We operate, as well as any other related products and services that refer or link to these legal terms (the &quot;<strong>Legal Terms</strong>&quot;) (collectively, the &quot;<strong>Services</strong>&quot;).
            </span>
          </div>
          <br />
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px" }}>
              You can contact us by email at <strong>__________</strong> or by mail to <strong>__________</strong>, <strong>__________</strong>, <strong>__________</strong>.
            </span>
          </div>
          <br />
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px" }}>
              These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&quot;<strong>you</strong>&quot;), and <strong>__________</strong>, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
            </span>
          </div>
          <br />
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px" }}>
              Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms at any time and for any reason. We will alert you about any changes by updating the &quot;Last updated&quot; date of these Legal Terms, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Legal Terms to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Legal Terms by your continued use of the Services after the date such revised Legal Terms are posted.
            </span>
          </div>
          <br />
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            We recommend that you print a copy of these Legal Terms for your records.
          </div>
          <br />

          {/* TABLE OF CONTENTS */}
          <div data-custom-class="heading_1" style={{ lineHeight: "1.5" }}>
            <strong><h2>TABLE OF CONTENTS</h2></strong>
          </div>
          {[
            ["#services", "1. OUR SERVICES"],
            ["#ip", "2. INTELLECTUAL PROPERTY RIGHTS"],
            ["#userreps", "3. USER REPRESENTATIONS"],
            ["#prohibited", "4. PROHIBITED ACTIVITIES"],
            ["#ugc", "5. USER GENERATED CONTRIBUTIONS"],
            ["#license", "6. CONTRIBUTION LICENSE"],
            ["#sitemanage", "7. SERVICES MANAGEMENT"],
            ["#terms", "8. TERM AND TERMINATION"],
            ["#modifications", "9. MODIFICATIONS AND INTERRUPTIONS"],
            ["#law", "10. GOVERNING LAW"],
            ["#disputes", "11. DISPUTE RESOLUTION"],
            ["#corrections", "12. CORRECTIONS"],
            ["#disclaimer", "13. DISCLAIMER"],
            ["#liability", "14. LIMITATIONS OF LIABILITY"],
            ["#indemnification", "15. INDEMNIFICATION"],
            ["#userdata", "16. USER DATA"],
            ["#electronic", "17. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES"],
            ["#misc", "18. MISCELLANEOUS"],
            ["#contact", "19. CONTACT US"],
          ].map(([href, label]) => (
            <div key={href} style={{ lineHeight: "1.5" }}>
              <a data-custom-class="link" href={href}>
                <span style={{ color: "rgb(0, 58, 250)", fontSize: "15px" }}>
                  <span data-custom-class="body_text">{label}</span>
                </span>
              </a>
            </div>
          ))}
          <br />

          {/* 1. OUR SERVICES */}
          <div data-custom-class="heading_1" id="services" style={{ lineHeight: "1.5" }}>
            <strong><span style={{ fontSize: "19px" }}><h2>1. OUR SERVICES</h2></span></strong>
          </div>
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px" }}>
              The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
            </span>
          </div>
          <br />

          {/* 2. INTELLECTUAL PROPERTY RIGHTS */}
          <div data-custom-class="heading_1" style={{ lineHeight: "1.5" }}>
            <strong><span id="ip" style={{ fontSize: "19px" }}><h2>2. INTELLECTUAL PROPERTY RIGHTS</h2></span></strong>
          </div>
          <div data-custom-class="heading_2" style={{ lineHeight: "1.5" }}>
            <strong><h3>Our intellectual property</h3></strong>
          </div>
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px" }}>
              We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the &quot;Content&quot;), as well as the trademarks, service marks, and logos contained therein (the &quot;Marks&quot;).
            </span>
          </div>
          <br />
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px" }}>
              Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties around the world.
            </span>
          </div>
          <br />
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px" }}>
              The Content and Marks are provided in or through the Services &quot;AS IS&quot; for your personal, non-commercial use or internal business purpose only.
            </span>
          </div>
          <div data-custom-class="heading_2" style={{ lineHeight: "1.5" }}>
            <strong><h3>Your use of our Services</h3></strong>
          </div>
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px" }}>
              Subject to your compliance with these Legal Terms, including the &quot;
              <a data-custom-class="link" href="#prohibited"><span style={{ color: "rgb(0, 58, 250)" }}>PROHIBITED ACTIVITIES</span></a>
              &quot; section below, we grant you a non-exclusive, non-transferable, revocable license to:
            </span>
          </div>
          <ul>
            <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>access the Services; and</span>
            </li>
            <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>download or print a copy of any portion of the Content to which you have properly gained access,</span>
            </li>
          </ul>
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px" }}>solely for your personal, non-commercial use or internal business purpose.</span>
          </div>
          <br />
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px" }}>
              Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
            </span>
          </div>
          <br />
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px" }}>
              If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to: <strong>__________</strong>. If we ever grant you the permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content.
            </span>
          </div>
          <br />
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px" }}>We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.</span>
          </div>
          <br />
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px" }}>Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.</span>
          </div>
          <div data-custom-class="heading_2" style={{ lineHeight: "1.5" }}>
            <strong><h3>Your submissions</h3></strong>
          </div>
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px" }}>
              Please review this section and the &quot;<a data-custom-class="link" href="#prohibited"><span style={{ color: "rgb(0, 58, 250)" }}>PROHIBITED ACTIVITIES</span></a>&quot; section carefully prior to using our Services to understand the (a) rights you give us and (b) obligations you have when you post or upload any content through the Services.
            </span>
          </div>
          <br />
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px" }}>
              <strong>Submissions:</strong> By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services (&quot;Submissions&quot;), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.
            </span>
          </div>
          <br />
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px" }}>
              <strong>You are responsible for what you post or upload:</strong> By sending us Submissions through any part of the Services you:
            </span>
          </div>
          <ul>
            <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>confirm that you have read and agree with our &quot;<a data-custom-class="link" href="#prohibited"><span style={{ color: "rgb(0, 58, 250)" }}>PROHIBITED ACTIVITIES</span></a>&quot; and will not post, send, publish, upload, or transmit through the Services any Submission that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening to any person or group, sexually explicit, false, inaccurate, deceitful, or misleading;</span>
            </li>
            <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>to the extent permissible by applicable law, waive any and all moral rights to any such Submission;</span>
            </li>
            <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>warrant that any such Submission are original to you or that you have the necessary rights and licenses to submit such Submissions and that you have full authority to grant us the above-mentioned rights in relation to your Submissions; and</span>
            </li>
            <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: "15px" }}>warrant and represent that your Submissions do not constitute confidential information.</span>
            </li>
          </ul>
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            You are solely responsible for your Submissions and you expressly agree to reimburse us for any and all losses that we may suffer because of your breach of (a) this section, (b) any third party&apos;s intellectual property rights, or (c) applicable law.
          </div>
          <br />

          {/* 3. USER REPRESENTATIONS */}
          <div data-custom-class="heading_1" id="userreps" style={{ lineHeight: "1.5" }}>
            <strong><span style={{ fontSize: "19px" }}><h2>3. USER REPRESENTATIONS</h2></span></strong>
          </div>
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px" }}>
              By using the Services, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Legal Terms; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (4) you will not use the Services for any illegal or unauthorized purpose; and (5) your use of the Services will not violate any applicable law or regulation.
            </span>
          </div>
          <br />
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px" }}>
              If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).
            </span>
          </div>
          <br />

          {/* 4. PROHIBITED ACTIVITIES */}
          <div data-custom-class="heading_1" id="prohibited" style={{ lineHeight: "1.5" }}>
            <strong><span style={{ fontSize: "19px" }}><h2>4. PROHIBITED ACTIVITIES</h2></span></strong>
          </div>
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px" }}>
              You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
            </span>
          </div>
          <br />
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px" }}>As a user of the Services, you agree not to:</span>
          </div>
          <ul>
            {[
              "Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.",
              "Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.",
              "Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.",
              "Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.",
              "Use any information obtained from the Services in order to harass, abuse, or harm another person.",
              "Make improper use of our support services or submit false reports of abuse or misconduct.",
              "Use the Services in a manner inconsistent with any applicable laws or regulations.",
              "Engage in unauthorized framing of or linking to the Services.",
              "Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party's uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.",
              "Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.",
              "Delete the copyright or other proprietary rights notice from any Content.",
              "Attempt to impersonate another user or person or use the username of another user.",
              'Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats ("gifs"), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as "spyware" or "passive collection mechanisms" or "pcms").',
              "Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.",
              "Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.",
              "Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.",
              "Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.",
              "Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.",
              "Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorized script or other software.",
              "Use a buying agent or purchasing agent to make purchases on the Services.",
              "Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.",
              "Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise.",
            ].map((item, i) => (
              <li key={i} data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>{item}</span>
              </li>
            ))}
          </ul>
          <br />

          {/* 5. USER GENERATED CONTRIBUTIONS */}
          <div data-custom-class="heading_1" id="ugc" style={{ lineHeight: "1.5" }}>
            <strong><span style={{ fontSize: "19px" }}><h2>5. USER GENERATED CONTRIBUTIONS</h2></span></strong>
          </div>
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px" }}>
              The Services does not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, &quot;Contributions&quot;). Contributions may be viewable by other users of the Services and through third-party websites. When you create or make available any Contributions, you thereby represent and warrant that the Contributions comply with our guidelines.
            </span>
          </div>
          <br />

          {/* 6. CONTRIBUTION LICENSE */}
          <div data-custom-class="heading_1" id="license" style={{ lineHeight: "1.5" }}>
            <strong><span style={{ fontSize: "19px" }}><h2>6. CONTRIBUTION LICENSE</h2></span></strong>
          </div>
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px" }}>
              You and Services agree that we may access, store, process, and use any information and personal data that you provide and your choices (including settings).
            </span>
          </div>
          <br />
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px" }}>
              By submitting suggestions or other feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation to you.
            </span>
          </div>
          <br />
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px" }}>
              We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Services. You are solely responsible for your Contributions to the Services and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.
            </span>
          </div>
          <br />

          {/* 7. SERVICES MANAGEMENT */}
          <div data-custom-class="heading_1" id="sitemanage" style={{ lineHeight: "1.5" }}>
            <strong><span style={{ fontSize: "19px" }}><h2>7. SERVICES MANAGEMENT</h2></span></strong>
          </div>
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.
          </div>
          <br />

          {/* 8. TERM AND TERMINATION */}
          <div data-custom-class="heading_1" id="terms" style={{ lineHeight: "1.5" }}>
            <strong><span style={{ fontSize: "19px" }}><h2>8. TERM AND TERMINATION</h2></span></strong>
          </div>
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px" }}>
              These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
            </span>
          </div>
          <br />
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px" }}>
              If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.
            </span>
          </div>
          <br />

          {/* 9. MODIFICATIONS AND INTERRUPTIONS */}
          <div data-custom-class="heading_1" id="modifications" style={{ lineHeight: "1.5" }}>
            <strong><span style={{ fontSize: "19px" }}><h2>9. MODIFICATIONS AND INTERRUPTIONS</h2></span></strong>
          </div>
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px" }}>
              We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.
            </span>
          </div>
          <br />
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px" }}>
              We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services. Nothing in these Legal Terms will be construed to obligate us to maintain and support the Services or to supply any corrections, updates, or releases in connection therewith.
            </span>
          </div>
          <br />

          {/* 10. GOVERNING LAW */}
          <div data-custom-class="heading_1" id="law" style={{ lineHeight: "1.5" }}>
            <strong><span style={{ fontSize: "19px" }}><h2>10. GOVERNING LAW</h2></span></strong>
          </div>
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px" }}>
              These Legal Terms shall be governed by and defined following the laws of <strong>__________</strong>. <strong>__________</strong> and yourself irrevocably consent that the courts of <strong>__________</strong> shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these Legal Terms.
            </span>
          </div>
          <br />

          {/* 11. DISPUTE RESOLUTION */}
          <div data-custom-class="heading_1" id="disputes" style={{ lineHeight: "1.5" }}>
            <strong><span style={{ fontSize: "19px" }}><h2>11. DISPUTE RESOLUTION</h2></span></strong>
          </div>
          <div data-custom-class="heading_2" style={{ lineHeight: "1.5" }}>
            <strong><h3>Informal Negotiations</h3></strong>
          </div>
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px" }}>
              To expedite resolution and control the cost of any dispute, controversy, or claim related to these Legal Terms (each a &quot;Dispute&quot; and collectively, the &quot;Disputes&quot;) brought by either you or us (individually, a &quot;Party&quot; and collectively, the &quot;Parties&quot;), the Parties agree to first attempt to negotiate any Dispute (except those Disputes expressly provided below) informally for at least <strong>__________</strong> days before initiating arbitration. Such informal negotiations commence upon written notice from one Party to the other Party.
            </span>
          </div>
          <br />
          <div data-custom-class="heading_2" style={{ lineHeight: "1.5" }}>
            <strong><h3>Binding Arbitration</h3></strong>
          </div>
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px" }}>
              Any dispute arising out of or in connection with these Legal Terms, including any question regarding its existence, validity, or termination, shall be referred to and finally resolved by the International Commercial Arbitration Court under the European Arbitration Chamber (Belgium, Brussels, Avenue Louise, 146) according to the Rules of this ICAC, which, as a result of referring to it, is considered as the part of this clause. The number of arbitrators shall be <strong>__________</strong>. The seat, or legal place, of arbitration shall be <strong>__________</strong>. The language of the proceedings shall be <strong>__________</strong>. The governing law of these Legal Terms shall be substantive law of <strong>__________</strong>.
            </span>
          </div>
          <div data-custom-class="heading_2" style={{ lineHeight: "1.5" }}>
            <strong><h3>Restrictions</h3></strong>
          </div>
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px" }}>
              The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.
            </span>
          </div>
          <div data-custom-class="heading_2" style={{ lineHeight: "1.5" }}>
            <strong><h3>Exceptions to Informal Negotiations and Arbitration</h3></strong>
          </div>
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px" }}>
              The Parties agree that the following Disputes are not subject to the above provisions concerning informal negotiations binding arbitration: (a) any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party; (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.
            </span>
          </div>
          <br />

          {/* 12. CORRECTIONS */}
          <div data-custom-class="heading_1" id="corrections" style={{ lineHeight: "1.5" }}>
            <strong><span style={{ fontSize: "19px" }}><h2>12. CORRECTIONS</h2></span></strong>
          </div>
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.
          </div>
          <br />

          {/* 13. DISCLAIMER */}
          <div data-custom-class="heading_1" id="disclaimer" style={{ lineHeight: "1.5" }}>
            <strong><span style={{ fontSize: "19px" }}><h2>13. DISCLAIMER</h2></span></strong>
          </div>
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px" }}>
              THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES&apos; CONTENT OR THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
            </span>
          </div>
          <br />

          {/* 14. LIMITATIONS OF LIABILITY */}
          <div data-custom-class="heading_1" id="liability" style={{ lineHeight: "1.5" }}>
            <strong><span style={{ fontSize: "19px" }}><h2>14. LIMITATIONS OF LIABILITY</h2></span></strong>
          </div>
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px" }}>
              IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE LESSER OF THE AMOUNT PAID, IF ANY, BY YOU TO US. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
            </span>
          </div>
          <br />

          {/* 15. INDEMNIFICATION */}
          <div data-custom-class="heading_1" id="indemnification" style={{ lineHeight: "1.5" }}>
            <strong><span style={{ fontSize: "19px" }}><h2>15. INDEMNIFICATION</h2></span></strong>
          </div>
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px" }}>
              You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys&apos; fees and expenses, made by any third party due to or arising out of: (1) use of the Services; (2) breach of these Legal Terms; (3) any breach of your representations and warranties set forth in these Legal Terms; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Services with whom you connected via the Services. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.
            </span>
          </div>
          <br />

          {/* 16. USER DATA */}
          <div data-custom-class="heading_1" id="userdata" style={{ lineHeight: "1.5" }}>
            <strong><span style={{ fontSize: "19px" }}><h2>16. USER DATA</h2></span></strong>
          </div>
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px" }}>
              We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.
            </span>
          </div>
          <br />

          {/* 17. ELECTRONIC COMMUNICATIONS */}
          <div data-custom-class="heading_1" id="electronic" style={{ lineHeight: "1.5" }}>
            <strong><span style={{ fontSize: "19px" }}><h2>17. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</h2></span></strong>
          </div>
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px" }}>
              Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.
            </span>
          </div>
          <br />

          {/* 18. MISCELLANEOUS */}
          <div data-custom-class="heading_1" id="misc" style={{ lineHeight: "1.5" }}>
            <strong><span style={{ fontSize: "19px" }}><h2>18. MISCELLANEOUS</h2></span></strong>
          </div>
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px" }}>
              These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services. You agree that these Legal Terms will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Legal Terms and the lack of signing by the parties hereto to execute these Legal Terms.
            </span>
          </div>
          <br />

          {/* 19. CONTACT US */}
          <div data-custom-class="heading_1" id="contact" style={{ lineHeight: "1.5" }}>
            <strong><span style={{ fontSize: "19px" }}><h2>19. CONTACT US</h2></span></strong>
          </div>
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px" }}>
              In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:
            </span>
          </div>
          <br />
          <div data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
              <strong>__________</strong>
            </span>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}