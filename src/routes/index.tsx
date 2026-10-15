import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

const stages = [
  { id: "why", n: "Why", label: "Why Virtual Agent" },
  { id: "minimum", n: "00", label: "Minimum" },
  { id: "guided", n: "01", label: "Guided Setup" },
  { id: "major", n: "★", label: "Major steps" },
  { id: "plan", n: "02", label: "Plan vs if-then" },
  { id: "install", n: "03", label: "Install" },
  { id: "brand", n: "04", label: "Brand" },
  { id: "portal", n: "05", label: "Portal" },
  { id: "mobile", n: "06", label: "Mobile" },
  { id: "handoff", n: "07", label: "Handoff" },
  { id: "channels", n: "08", label: "Channels" },
  { id: "topics", n: "09", label: "Topics" },
  { id: "operate", n: "10", label: "Monitor" },
  { id: "deeper", n: "11", label: "Checklist" },
];

function Home() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-8 sm:px-8 sm:py-12">
      <header className="border-b border-line pb-6">
        <p className="text-sm font-semibold tracking-wide text-teal uppercase">
          Click-path brief · Tokyo and later
        </p>
        <h1 className="mt-2 font-display text-4xl leading-tight text-ink sm:text-5xl">
          Virtual Agent Implementation
        </h1>
        <p className="mt-4 text-lg leading-snug text-ink">
          From plugin activation through continual monitoring. Each stage is
          the navigator path, the table or property that holds the setting, and
          the smallest thing that counts as done. Only <strong>admin</strong> can
          turn plugins and store apps on. After that,{" "}
          <strong>virtual_agent_admin</strong> builds the bot and{" "}
          <strong>awa_admin</strong> routes the live-agent handoff. The
          configuration to-dos follow{" "}
          <a
            className="font-semibold text-teal underline"
            href="https://www.servicenow.com/community/virtual-agent-nlu-articles/virtual-agent-implementation-checklist-a-deeper-dive/ta-p/2306564"
          >
            Virtual Agent implementation checklist — a deeper dive
          </a>{" "}
          by Victor Chen (ServiceNow, 24 July 2022). For the project around
          those clicks, use the community{" "}
          <a
            className="font-semibold text-teal underline"
            href="https://www.servicenow.com/community/itsm-articles/itsm-pro-va-quick-start-guide-with-service-portal-or-microsoft/ta-p/2312069"
          >
            ITSM Pro VA Quick Start Guide with Service Portal or Microsoft Teams
          </a>{" "}
          (14 April 2021). The steps sit in the attached slide decks: initiate,
          plan, execute, deliver, and close, on Service Portal or Teams.
        </p>
      </header>

      <nav aria-label="Sections" className="no-print mt-6 flex flex-wrap gap-2">
        {stages.map((stage) => (
          <a
            key={stage.id}
            href={`#${stage.id}`}
            className="rounded-full border border-line bg-card px-3 py-2 text-sm font-semibold text-ink hover:border-teal hover:text-teal"
          >
            {stage.n} {stage.label}
          </a>
        ))}
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-full bg-teal px-3 py-2 text-sm font-semibold text-card"
        >
          Print brief
        </button>
      </nav>

      <Section id="why" n="Why" title="Why Virtual Agent">
        <p>
          Virtual Agent exists so a repeated request is answered without a
          person, and so the person who is left gets the work the bot should
          not finish. If you cannot name which of those you are buying, the
          plugin list in the next section has nothing to aim at.
        </p>
        <p>
          The 2020 ITSM Pro quick-start deck, slide 2, groups the case in
          three. The percentages below are that slide’s citations. They are
          not a reading from your instance, and “by 2020” is a forecast from
          that year.
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-line bg-card p-4">
            <h3 className="font-semibold text-ink">Agent and bot partnership</h3>
            <p className="mt-2">
              The deck cites 79% for improved agent productivity
              (businesswire.com) and 65% of users saying a chatbot adds value
              (Chatbots Magazine). The bot takes the repeatable ask. The agent
              takes the rest, with the earlier messages still on the
              interaction.
            </p>
          </div>
          <div className="rounded-xl border border-line bg-card p-4">
            <h3 className="font-semibold text-ink">The next channel</h3>
            <p className="mt-2">
              The same slide cites 80% of businesses treating chat as part of
              the business by 2020 (act.com) and 67% expecting chatbots to
              outperform mobile apps over the following five years (Chatbots
              Magazine). That is why portal, Now Mobile, and Teams are the
              same bot on more doors, not three projects.
            </p>
          </div>
          <div className="rounded-xl border border-line bg-teal-soft p-4">
            <h3 className="font-semibold text-ink">Operational impact</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <strong>Incident deflection.</strong> A published topic closes
                the request in the bot.
              </li>
              <li>
                <strong>Increased productivity.</strong> Agents stop
                retyping the status check.
              </li>
              <li>
                <strong>Reduced MTTR.</strong> Only if the handoff lands on an
                available agent. A transfer into an empty queue makes this
                worse.
              </li>
              <li>
                <strong>Availability, 24×7.</strong> The bot does not keep
                office hours. The queue behind it still might.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="minimum" n="00" title="Bare minimum to stand a bot up">
        <p>
          You do not design a custom conversation on day one. You need a
          starting point, one product choice, one portal, and at least one{" "}
          <strong>published</strong> topic. Unpublished topics are invisible.
        </p>
        <h3 className="font-semibold text-ink">Choose the starting point</h3>
        <p>
          Not every organization starts the same way. Match the license before
          you touch a plugin.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-line bg-card p-4">
            <h3 className="font-semibold text-ink">Full Virtual Agent license</h3>
            <p className="mt-2 text-muted">
              ITSM Pro, HRSD Pro, or Enterprise. The course company Cloud
              Dimensions is this case. Activate Glide Virtual Agent (
              <code>com.glide.cs.chatbot</code>) and follow the stages below.
            </p>
          </div>
          <div className="rounded-xl border border-line bg-teal-soft p-4">
            <h3 className="font-semibold text-ink">ITSM Standard, no full license</h3>
            <p className="mt-2 text-ink">
              Virtual Agent Lite is already on the instance (
              <code>com.glide.cs.chatbot.lite</code>). Do not install the full
              plugin. In Designer, review the prebuilt ITSM conversations,
              duplicate the ones you will use, and publish them.
            </p>
          </div>
        </div>
        <p>
          Lite is a smaller product: NLU is limited, and there is no
          Conversational Analytics dashboard. It is still a working chat you
          can put on a portal, and it is the base you upgrade from when the
          full license arrives.
        </p>
        <h3 className="font-semibold text-ink">Three roles, three jobs</h3>
        <p>
          The <strong>admin</strong> role is required to activate plugins and
          store applications. A Virtual Agent admin or an AWA admin cannot do
          that step. Once the plugins are active, those two roles do the rest
          of the implementation. They are not extra people standing next to
          the bot. They own two different halves of it.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>admin</strong> installs Glide Virtual Agent, the ITSM or
            HR conversations app, Agent Chat, Omni-Experience, Analytics, and
            Teams or Slack. On a domain-separated instance, do this from the
            global domain.
          </li>
          <li>
            <strong>virtual_agent_admin</strong> is the bot builder. Designer,
            greetings, branding, NLU, the portal chat experience, and publish.
            This role does not activate plugins. Give it to the person who
            will change topics after go-live, instead of leaving them on admin.
          </li>
          <li>
            <strong>awa_admin</strong> routes the live chat after the bot gives
            up. When the user asks for a person, or a topic hits{" "}
            <strong>Handover to agent</strong>, the conversation becomes an AWA
            work item. This role sets the chat service channel, the queues
            (a password topic can go to a different team than a hardware
            topic), and the assignment rules. It also sets presence (online,
            away, busy), skills, and how many chats an agent can hold, so the
            work item lands only on a qualified agent who is available in
            Agent Workspace. Path: <code>All › Advanced Work Assignment</code>.
            The person who answers needs <strong>awa_agent</strong>, not
            awa_admin.
          </li>
        </ul>
        <p>
          One person who already has admin can do all three. The split matters
          when the bot builder is not the platform admin, and when the team
          that staffs live agents is not the team that writes topics.
        </p>
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            <strong>Confirm which bot you have.</strong>{" "}
            <code>All › System Definition › Plugins</code>. If Glide Virtual
            Agent is missing and Lite is active, stay on the Lite path. Role: admin.
          </li>
          <li>
            <strong>Say what the bot is for.</strong> ITSM, HR, or another line
            of business, and whether live agents are in scope. That answer is
            the plan. It is not a flowchart.
          </li>
          <li>
            <strong>Activate, only if you hold the full license.</strong> Glide
            Virtual Agent (<code>com.glide.cs.chatbot</code>) and the matching
            store conversations (ITSM Virtual Agent Conversations). Lite
            already has its ITSM conversations. Do not install the full plugin
            on a Standard instance.
          </li>
          <li>
            <strong>Put it on one portal</strong> and open <code>/sp</code> as a requester.
          </li>
          <li>
            <strong>Publish</strong> the greeting plus one real topic (for example Check ticket status). Save is not publish.
          </li>
          <li>
            <strong>Watch it, if you have the full product.</strong> After
            people use it, open Conversational Analytics. Lite has no such
            dashboard. Until you upgrade, your check is the three test places:
            Home, Designer, and the portal.
          </li>
        </ol>
        <Callout>
          Skip mobile, Teams, custom branding, and extra languages until the portal conversation finishes a real request. Those are the same bot on more doors, not a second implementation.
        </Callout>
      </Section>

      <Section id="guided" n="01" title="Conversational Interfaces Guided Setup">
        <p>
          Guided Setup does not install a generic checklist. A short survey
          reads your entitlements and your answers, then builds the task list
          you actually see. Tasks sit in categories (plugins, chat clients,
          agent chat, and so on). Do them in the order shown.
        </p>
        <Crumb parts={["All", "Guided Setup", "Conversational Interfaces Guided Setup"]} />
        <div id="major" className="major-steps scroll-mt-6 p-5 sm:p-6">
          <h3 className="flex items-center gap-2 font-display text-2xl">
            <span className="gold-star text-3xl leading-none" aria-hidden="true">
              ★
            </span>
            Major steps
          </h3>
          <p className="mt-2">
            Start at{" "}
            <strong>Conversational Interfaces Guided Setup</strong>. The first
            page has three tabs. Answer all three before you pick Quick or
            Manual. Each answer adds or hides tasks.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>
              <strong>General Setup</strong> — live agents, the bot, or both;
              who holds admin, virtual_agent_admin, and awa_admin; which
              channels; colors, logo, and the greeting lines.
            </li>
            <li>
              <strong>Virtual Agent Setup</strong> — own words (NLU) or
              keywords, plus whether Topic Recommendations should suggest
              topics from real requests.
            </li>
            <li>
              <strong>Agent Chat Setup</strong> — the live half: queues,
              assignment, and who is allowed to take a transferred chat.
            </li>
          </ul>
          <h4 className="mt-4 font-semibold">Own words, or keywords</h4>
          <p className="mt-1">
            If users should ask in their own words, pick an NLU provider and
            the languages you will support. You maintain the models. They are
            edited in Virtual Agent Designer or in NLU Workbench. You create
            and keep these three:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              <strong>Intent</strong> — what the user is looking for. One
              intent per topic. Example: check the status of an incident.
            </li>
            <li>
              <strong>Utterance</strong> — an example of how they might say
              it. “Where is my ticket?” and “status of INC0012345” are two
              utterances for that same intent.
            </li>
            <li>
              <strong>Entity</strong> — the object or context the action
              needs. In that example, the incident number is the entity.
            </li>
          </ul>
          <p className="mt-2">
            If you skip NLU, discovery uses the <strong>Keywords</strong> on
            Topic Properties instead. Keywords do not replace intents. They
            are the fallback when there is no model for that language.
          </p>
          <h4 className="mt-4 font-semibold">Topic Recommendations</h4>
          <p className="mt-1">
            If you want the product to suggest topics, name the common tasks
            people already request (incidents, catalog items, service
            requests). Topic Recommendations analyzes that data and ranks
            topics worth publishing. It does not write the topic for you.
          </p>
        </div>
        <h3 className="font-semibold text-ink">Things to consider before you click through</h3>
        <p>
          Answer these on the setup page before you pick Quick or Manual. The
          page has three tabs: <strong>General Setup</strong>,{" "}
          <strong>Virtual Agent Setup</strong>, and{" "}
          <strong>Agent Chat Setup</strong>. General Setup decides who is in
          scope, who is allowed to configure it, where users will reach it,
          and how it should look. The other two tabs ask the same kind of
          questions for the bot and for live chat. A wrong answer here hides
          tasks you will need later.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>What types of agents?</strong> Live agents, Virtual Agent,
            or both. Virtual only drops the Agent Chat and AWA tasks. Live
            only drops topic design. Both keeps the handoff path in section 07.
          </li>
          <li>
            <strong>Which roles?</strong> System admin installs the plugins.
            Virtual Agent admin configures the bot. AWA admin configures the
            queues. Name the people before the task list appears, or the
            install stalls on a role nobody holds.
          </li>
          <li>
            <strong>Which channels?</strong> Web portals, ServiceNow Mobile,
            a supported messaging app (Slack, SMS with Twilio, Teams,
            Workplace), or a custom channel such as a proprietary chat app.
            Also decide who has admin access in that third-party app. Install
            only the channels you named. A custom channel is a build, not a
            store app.
          </li>
          <li>
            <strong>Look and feel?</strong> Corporate colors, logos and icons,
            support details such as email and hours, and the conversational
            lines: greeting, fallback, and closing. Colors and the logo are
            the branding record. The three lines are setup topics, not
            branding.
          </li>
        </ul>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Select <strong>Get Started</strong>.</li>
          <li>Open <strong>Customize your setup</strong> and select <strong>Configure</strong>.</li>
          <li>
            Answer what kind of bot this is: ITSM, HR, ITBM, Field Service, and
            whether you also want <strong>Workspace Agent Chat</strong>. The
            task list drops work for products you did not select.
          </li>
          <li>Choose <strong>Quick setup</strong> or <strong>Manual setup</strong>, then <strong>Continue</strong>.</li>
          <li>Work the tasks top to bottom. Mark each one complete only after you have verified it (Designer opens, portal chat opens).</li>
        </ol>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-line bg-card p-4">
            <h3 className="font-semibold text-ink">Quick setup</h3>
            <p className="mt-2 text-muted">
              The minimum steps for a basic agent. Plugins, one portal, branding
              optional, prebuilt topics. Use this when you want a working bot
              this week and you will not hand-build every topic.
            </p>
          </div>
          <div className="rounded-xl border border-line bg-teal-soft p-4">
            <h3 className="font-semibold text-ink">Manual setup</h3>
            <p className="mt-2 text-ink">
              The full list: every plugin, Virtual Agent, Agent Chat, AWA,
              integrations, and notifications. Use this when you are
              implementing, not trialing. The course walks Manual so you see
              every task Quick would have hidden.
            </p>
          </div>
        </div>
        <p>
          The first block (install and enable) is once per instance. Come back
          to the rest when you add a portal, a language, or a channel. On an
          upgrade, Guided Setup keeps tasks you already finished. Work done
          before this guided setup existed has to be selected by hand.
        </p>
        <p>
          Home tiles are the same jobs without the survey:{" "}
          <code>All › Conversational Interfaces › Home</code>. Use Home when
          the guided list is already done and you are changing one thing.
        </p>
      </Section>

      <Section id="plan" n="02" title="The plan is not the if-then">
        <p>
          Yes, you need a plan of what the agent is allowed to do. That plan is
          a short list of jobs, not a script of every question.
        </p>
        <h3 className="font-semibold text-ink">Plan — what the bot may do</h3>
        <p>
          Write the jobs before you open Designer: reset a password, check an
          incident, order a laptop. Each job becomes one topic. Anything not on
          the list stays unpublished, so the bot cannot start it. The survey in
          Guided Setup is this plan in product form (ITSM, and live agent or not).
        </p>
        <h3 className="font-semibold text-ink">Finding the topic — not if-then</h3>
        <p>
          The user types a sentence. Virtual Agent matches <strong>one intent per topic</strong> (NLU) or the <strong>Keywords</strong> on Topic Properties. One match starts that topic. Several matches show a choice list. None runs the Fallback setup topic, or AI Search Fallback if you turned that on.
        </p>
        <p>
          Property <code>com.glide.cs.max_number_display_topics</code> is how many matches to show. Default is 3. Keywords are the backup when NLU finds nothing, too many intents, or the language has no NLU model.
        </p>
        <h3 className="font-semibold text-ink">If-then — only after a topic has started</h3>
        <p>
          Inside Designer, a <strong>Decision</strong> control branches on a value you already collected. Example: a Boolean “Add a comment?” If Yes, take the comment branch. If No, end. The Decision has no properties of its own. The condition sits on each branch (the first branch is labeled Always until you change it).
        </p>
        <p>
          That if-then never chooses which topic to open. It only steers a conversation that has already begun. Prebuilt ITSM topics already contain these branches. You write new ones only when a published topic does not cover the job.
        </p>
        <p>
          Setup topics are the frame around every job, not extra if-then: Greeting (Dynamic Greeting says the user’s name), Fallback, Anything Else, Closing, Survey, Live Agent Support. They are chosen on the chat experience, not discovered like a normal topic.
        </p>
        <Crumb parts={["All", "Conversational Interfaces", "Settings", "Virtual Agent", "Custom Greetings and Setup"]} />
        <p>
          Survey odds: <code>com.glide.cs.survey.probability</code> (0.33 means the feedback topic appears in about a third of conversations). Table for topics: <code>sys_cs_topic</code> — both <strong>Active</strong> and <strong>Published</strong> must be true.
        </p>
      </Section>

      <Section id="install" n="03" title="Install and verify plugins">
        <Crumb parts={["All", "Conversational Interfaces", "Home"]} />
        <ol className="list-decimal space-y-2 pl-5">
          <li>If the home page says Virtual Agent is not installed, select <strong>Get Virtual Agent plugin</strong>, then <strong>Start install</strong>.</li>
          <li>On the Applications page, Glide Virtual Agent (<code>com.glide.cs.chatbot</code>) is selected. Choose <strong>Install/Update All</strong>, then <strong>Install</strong>.</li>
          <li>Back on Home, under the request-type tiles, select <strong>Get ITSM plugin</strong> (or HR) and <strong>Opt-in</strong> on the Store app. Repeat for Conversational Analytics if you will report later.</li>
          <li>Also install the store app <strong>Omni-Experience Standard Feature Set</strong>. Chen flags this next to the Virtual Agent plugins. It is the bundle behind the Conversational Interfaces admin console. Do not skip it because the Home page already looks finished.</li>
        </ol>
        <p>Same plugin if the Home tile is missing:</p>
        <Crumb parts={["All", "System Definition", "Plugins"]} />
        <ol className="list-decimal space-y-2 pl-5">
          <li>Search <strong>Glide Virtual Agent</strong>. Select <strong>Install</strong>, then <strong>Activate</strong>. You need a Virtual Agent subscription. In a domain-separated instance, activate from the global domain.</li>
          <li>Confirm it landed: <strong>All → Collaboration → Virtual Agent → Designer</strong>. The topic list should open. Setup topics are active; prebuilt ITSM topics stay inactive until you publish them.</li>
        </ol>
        <Callout>
          Also expect these to come with the core plugin: web client (<code>com.glide.cs.sn-va-web-client-app</code>), Designer (<code>com.snc.conversation_builder</code>), branding (<code>com.glide.cs.branding</code>), and platform topics. Do not brand until Designer opens.
        </Callout>
      </Section>

      <Section id="brand" n="04" title="Brand the chat client">
        <p>This changes logo, colors, and the bot icon the requester sees. It is not Agent Client Collector.</p>
        <Crumb parts={["All", "Conversational Interfaces", "Home", "Edit your bot's look and feel", "Set up branding"]} />
        <p>Longer path to the same form:</p>
        <Crumb parts={["All", "Conversational Interfaces", "Settings", "Display options", "Branding", "View All"]} />
        <ol className="list-decimal space-y-2 pl-5">
          <li>Select <strong>New</strong>, or open the branding record you will change. Records live on <strong>Branding</strong> (<code>sys_cs_branding_setup</code>).</li>
          <li>
            Fill the chat fields:
            <ul className="mt-1 list-disc pl-5">
              <li><strong>Name</strong> — the label you will recognize later. The <strong>branding key</strong> is what portals and embedded clients actually reference.</li>
              <li><strong>Header logo</strong> — <strong>Attach Image</strong>. This is the logo in the chat header and, in a browser window, the tab icon. Replace it with <strong>View image</strong>; remove it with the trash icon.</li>
              <li><strong>Bot profile / avatar</strong> — the picture beside bot messages. Use a square image (docs call out 144×144 for the premium-chat logo). Accepted types include jpg, png, gif, svg.</li>
              <li><strong>Colors</strong> — header, background, and the bot and user bubbles, where those fields are on the form. The console shows a subset; the table has more (agent bubble, bot bubble font). Add them with <strong>Configure → Form Layout</strong> if you need them.</li>
              <li><strong>Menu items</strong> — chat, phone, email, or your own. Save each menu item before leaving that section.</li>
            </ul>
          </li>
          <li>Select <strong>Save</strong> or <strong>Update</strong>. Copy the branding key.</li>
          <li>
            Point a client at that key. A saved branding record does nothing until something references it.
            <ul className="mt-1 list-disc pl-5">
              <li><strong>Portal:</strong> on the Agent Chat configuration (next section), set the branding, or pass <code>branding_key</code> from the configuration server script.</li>
              <li><strong>Web client URL:</strong> <code>$sn-va-web-client-app.do?sysparm_branding_key=your_key</code></li>
              <li><strong>Embedded page:</strong> add <code>sysparm_branding_key=your_key</code> on the iframe <code>src</code>.</li>
            </ul>
          </li>
          <li>Open the portal as a requester. Confirm header logo, bot avatar, and colors before you call branding done.</li>
        </ol>
      </Section>

      <Section id="portal" n="05" title="Enable the portal web client">
        <Crumb parts={["All", "Conversational Interfaces", "Home", "Add your bot to a portal", "Add to portal"]} />
        <p>Same table without the tile:</p>
        <Crumb parts={["All", "Service Portal", "Agent Chat"]} />
        <ol className="list-decimal space-y-2 pl-5">
          <li>Open the base <strong>Service Portal Agent Chat Config</strong>, or select <strong>New</strong>.</li>
          <li><strong>Name</strong> — a unique name. Course labs often require a specific name such as <code>VA</code>.</li>
          <li><strong>Portals</strong> — select the lock, then the search icon, and choose <strong>Service Portal</strong> (or Employee Center). Empty means every portal.</li>
          <li><strong>Order</strong> — lowest number wins when two configs target the same portal. Only one config runs per portal.</li>
          <li><strong>Active</strong> — selected. Inactive means the launcher never appears.</li>
          <li>Select <strong>Submit</strong> or <strong>Update</strong>. The record is on <code>sp_agent_chat_config</code>.</li>
          <li>Open the portal (<code>/sp</code>) while logged in as a requester. The chat control should be on the page. Start a conversation and confirm the branding from the previous step.</li>
        </ol>
      </Section>

      <Section id="mobile" n="06" title="iOS and Android">
        <p>
          There is no separate Virtual Agent install per phone. Requesters use <strong>Now Mobile</strong> (Apple App Store and Google Play) against this instance. Branding you saved in Conversational Interfaces is what mobile uses; you do not recolor the bot inside Mobile App Builder.
        </p>
        <Crumb parts={["All", "System Mobile", "Mobile App Builder"]} />
        <ol className="list-decimal space-y-2 pl-5">
          <li>Plugins already required: Glide Virtual Agent, plus the mobile app plugins for Now Mobile.</li>
          <li>Create a function of type <strong>Chat launcher</strong>. Set context to <strong>Global</strong>.</li>
          <li>Add that function as a quick action on the Now Mobile homepage (top corner, or the center item on the bottom bar in later releases).</li>
          <li>Save, then force-close and reopen Now Mobile on the device so it picks up the applet.</li>
        </ol>
        <p>If the instance uses assistants instead of the older launcher:</p>
        <Crumb parts={["All", "Conversational Interfaces", "Assistants", "your assistant", "Display experience", "Mobile"]} />
        <ol className="list-decimal space-y-2 pl-5">
          <li>Select the mobile chat function, save, and refresh the app.</li>
        </ol>
      </Section>

      <Section id="handoff" n="07" title="Live agent handoff">
        <p>
          Three layers have to agree. A topic node alone does not route anyone.
          The Virtual Agent admin publishes the handoff topic. The AWA admin
          makes a queue that can receive it. The platform admin is the one who
          activated Agent Chat.
        </p>
        <h3 className="font-semibold text-ink">1. Turn Agent Chat on</h3>
        <Crumb parts={["All", "Conversational Interfaces", "Home", "Agent Chat"]} />
        <ol className="list-decimal space-y-2 pl-5">
          <li>Enable <strong>Activate</strong>. Set the transfer message (for example, “Please stand by while I connect you to a live agent.”). Save.</li>
          <li>If the tile is missing, activate plugin <strong>Agent Chat</strong> (<code>com.glide.interaction.awa</code>) from <strong>System Definition → Plugins</strong>.</li>
        </ol>
        <h3 className="font-semibold text-ink">2. Point the bot at a real handoff topic</h3>
        <Crumb parts={["All", "Conversational Interfaces", "Settings", "Virtual Agent", "Custom Greetings and Setup"]} />
        <ol className="list-decimal space-y-2 pl-5">
          <li>Open the chat experience you use (often <strong>Default chat experience</strong>).</li>
          <li>Set <strong>Live Agent Context</strong> to the base <strong>Live Agent Support</strong> topic. Save.</li>
          <li>In Designer, confirm that topic is <strong>Active</strong> and <strong>Published</strong> (<code>sys_cs_topic.list</code>). On your own topics, drop in the <strong>Handover to agent</strong> control where the bot should give up.</li>
        </ol>
        <h3 className="font-semibold text-ink">3. Give the work a queue</h3>
        <p>
          Role: <strong>awa_admin</strong>. The transfer is not finished when
          the bot says it is connecting you. AWA turns that chat into a work
          item and offers it only to an agent who is online, has the skill,
          and still has capacity.
        </p>
        <Crumb parts={["All", "Advanced Work Assignment", "Queues"]} />
        <ol className="list-decimal space-y-2 pl-5">
          <li>Confirm a <strong>chat</strong> service channel exists. A queue with no channel never receives the handoff.</li>
          <li>Open the chat queue. Point specialized topics at the right team (passwords to identity, hardware to the desk). The work-item condition must match how interactions are created. They are created in <strong>Work in Progress</strong>. A condition that only matches <strong>New</strong> means agents never see the chat.</li>
          <li>Set the assignment rule, agent skills, presence states (online, away, busy), and capacity. An agent at capacity, or marked away, must not receive the next transfer.</li>
          <li>On <code>sys_cs_live_agent_setup.list</code>, set <strong>ITSM Fulfiller UI</strong> and <strong>Global Fulfiller UI</strong> to <strong>Agent Workspace</strong>, not Connect. Save.</li>
          <li>Test twice: a topic that finishes in the bot, and a transfer that lands in Agent Workspace with the prior messages still on the interaction.</li>
        </ol>
      </Section>

      <Section id="channels" n="08" title="Pre-built messaging apps">
        <Crumb parts={["All", "System Applications", "All Available Applications", "All"]} />
        <ol className="list-decimal space-y-2 pl-5">
          <li>Install the store app for the channel you will actually use: <strong>Conversational Integration with Microsoft Teams</strong> or <strong>Slack</strong>. Opt in. Do not start with the custom chat adapter (<code>com.glide.cs.custom.adapter</code>); that is a build, not this course’s path.</li>
          <li>
            Connect it from the console:
          </li>
        </ol>
        <Crumb parts={["All", "Conversational Interfaces", "Settings", "Integrations"]} />
        <ol className="list-decimal space-y-2 pl-5" start={2}>
          <li>Open the provider (Teams or Slack). Complete the tenant or workspace link the page asks for, and set the bot name and icon for that channel. Those are channel fields; they do not replace the branding record.</li>
          <li>Save. In the external app, send a phrase you know maps to a <strong>published</strong> topic. If the portal topic works and Teams does not, the topic is fine and the provider link is not.</li>
        </ol>
      </Section>

      <Section id="topics" n="09" title="Build, test, publish, move">
        <Crumb parts={["All", "Collaboration", "Virtual Agent", "Designer"]} />
        <ol className="list-decimal space-y-2 pl-5">
          <li><strong>Plan</strong> before the canvas. Pick one job from incidents, catalog items, or repeated agent work. Write the branches on paper: start, choices, empty search, handoff, end.</li>
          <li><strong>New</strong> topic, or open an inactive prebuilt topic. Set name, description, and category. Keep keywords or NLU intents on that one intent only.</li>
          <li><strong>Build</strong> between Start and End. Use Text, Link, Card, and the record controls. Avoid custom HTML so portal, Now Mobile, and Teams render the same nodes. Script only when no control does the lookup.</li>
          <li><strong>Test</strong> with the Designer preview: happy path, a nonsense utterance, an empty lookup, and the handover node.</li>
          <li><strong>Publish</strong>. Until you publish, the topic stays off the requester’s topic list. Save is not publish.</li>
          <li>
            Greeting and promoted topics are not on the topic canvas:
          </li>
        </ol>
        <Crumb parts={["All", "Conversational Interfaces", "Settings", "Virtual Agent", "Custom Greetings and Setup", "Default chat experience"]} />
        <ol className="list-decimal space-y-2 pl-5" start={6}>
          <li>
            On <strong>Default chat experience</strong>, set these by name. They ship with the ITSM conversations app:
            <ul className="mt-1 list-disc pl-5">
              <li><strong>Greeting</strong> — <strong>Dynamic Greeting</strong>. It addresses the user by name.</li>
              <li><strong>Fallback</strong> — <strong>Search Fallback</strong>.</li>
              <li>If AI Search is on, use <strong>AI Search - Fallback</strong> instead, so a missed utterance returns search results rather than a dead end.</li>
              <li><strong>Promoted Topics</strong> — pin one topic people already ask for. It shows on the greeting.</li>
            </ul>
          </li>
          <li>Save. Re-open the portal and confirm the greeting uses the name, the promoted topic is visible, and a nonsense sentence hits search fallback rather than silence.</li>
        </ol>
        <h3 className="font-semibold text-ink">Topic Recommendations, then NLU</h3>
        <Crumb parts={["All", "Conversational Interfaces", "Virtual Agent", "Topic Recommendations"]} />
        <ol className="list-decimal space-y-2 pl-5">
          <li>Install <strong>Topic Recommendations</strong> (<code>sn_topic_recommend</code>). It needs NLU Workbench and the ITSM Virtual Agent Conversations app. The page stays empty until you define a report.</li>
          <li>Configure analysis on Incident, Request, live-agent transcripts, or Virtual Agent fallback utterances. Run it. You get a ranked list: topics Virtual Agent can already handle, and intents you would have to build.</li>
          <li>For a match, <strong>duplicate</strong> the prebuilt topic. Do not publish the suggestion in place. Test the copy, then publish.</li>
        </ol>
        <Crumb parts={["All", "Conversational Interfaces", "Settings", "Virtual Agent", "NLU"]} />
        <ol className="list-decimal space-y-2 pl-5">
          <li>Turn NLU on for topic discovery. Map one intent to each topic. Setup-topic NLU is <code>com.glide.cs.nlu.topics</code>. Keywords stay as the backup.</li>
        </ol>
        <h3 className="font-semibold text-ink">Where to test</h3>
        <p>
          Chen’s three places, in this order: the preview on <strong>Conversational Interfaces Home</strong>, the preview inside <strong>Designer</strong>, then the <strong>portal</strong> as a requester. Designer-only is not done.
        </p>
        <h3 className="font-semibold text-ink">Languages</h3>
        <Crumb parts={["Designer", "Manage languages"]} />
        <ol className="list-decimal space-y-2 pl-5">
          <li>Turn on only the languages you will test. Request or enter translations for the topic text.</li>
          <li>Plugin behind dynamic translation is <code>com.glide.cs.dynamic.translation.virtual_agent</code>. Re-run the preview in each language. A longer translated button label is a real defect, not a wording nit.</li>
        </ol>
        <h3 className="font-semibold text-ink">Move the topic to another instance</h3>
        <Crumb parts={["All", "System Update Sets", "Local Update Sets"]} />
        <ol className="list-decimal space-y-2 pl-5">
          <li>Set your update set to In progress <strong>before</strong> you change the topic, or the topic will not be in the set.</li>
          <li><strong>Complete</strong> the set, then on the target instance <strong>Retrieved Update Sets → Import → Preview → Commit</strong>.</li>
          <li>The topic can arrive while the portal config, branding key, queue, and Teams link stay behind. Repeat the portal, branding, and publish checks on the target. Then open the portal there.</li>
        </ol>
      </Section>

      <Section id="operate" n="10" title="Notifications, then continual monitoring">
        <h3 className="font-semibold text-ink">Notifications</h3>
        <Crumb parts={["All", "System Definition", "Plugins"]} />
        <ol className="list-decimal space-y-2 pl-5">
          <li>Confirm <strong>Virtual Agent Notification</strong> (<code>com.glide.cs.notification</code>) is active. Actionable notifications are <code>com.glide.cs.actionable.notification</code>.</li>
          <li>For Teams or Slack, enable the channel’s notification option on the same integration record you connected above. A handoff that only speaks inside the open portal window goes silent on the phone.</li>
          <li>Trigger a transfer as a requester and confirm a notification actually arrives.</li>
        </ol>
        <h3 className="font-semibold text-ink">Conversational Analytics</h3>
        <Crumb parts={["All", "Conversational Interfaces", "Home"]} />
        <ol className="list-decimal space-y-2 pl-5">
          <li>Install the <strong>Conversational Analytics</strong> store app (<code>sn_ci_analytics</code>) if the dashboard tile is absent.</li>
          <li>Open the dashboard. Read four numbers on a schedule, not once: topics that run, topics that finish, topics that transfer, topics with no traffic.</li>
          <li>Rewrite or retire from that list, publish again, and read the same widgets after real use. Monitoring is that loop. A topic that only looks good in your test chats is not monitored.</li>
        </ol>
      </Section>

      <Section id="deeper" n="11" title="Deeper-dive checklist">
        <p>
          These are the configuration to-dos from{" "}
          <a
            className="font-semibold text-teal underline"
            href="https://www.servicenow.com/community/virtual-agent-nlu-articles/virtual-agent-implementation-checklist-a-deeper-dive/ta-p/2306564"
          >
            Virtual Agent implementation checklist — a deeper dive
          </a>
          , written by <strong>Victor Chen</strong>, ServiceNow (published 24 July 2022, edited 24 March 2023). His workbook is attached here:{" "}
          <a className="font-semibold text-teal underline" href="/VA-checklist-deeper-dive.xlsx" download>
            VA checklist - deeper dive.xlsx
          </a>
          . The file properties list him as creator (25 July 2022). It has one sheet and three columns: the to-do, a docs link, and a Done checkbox. There are no extra rows beyond the list below.
        </p>
        <p>
          He assumes you already finished the earlier readiness checklist: Knowledge Base in shape, Service Catalog ready for the bot to order from, and a change process for what you publish. Do that before the list below. The project sequence around this list is the{" "}
          <a
            className="font-semibold text-teal underline"
            href="https://www.servicenow.com/community/itsm-articles/itsm-pro-va-quick-start-guide-with-service-portal-or-microsoft/ta-p/2312069"
          >
            ITSM Pro VA Quick Start Guide
          </a>{" "}
          (14 April 2021): initiate, plan, execute, deliver, and close, for Service Portal or Microsoft Teams. The steps are in the attached decks on that page. The community lists the author as Administrator, so this brief does not add a personal byline.
        </p>
        <ol className="list-decimal space-y-3 pl-5">
          {deeper.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong>
              <span className="mt-1 block font-mono text-sm break-words text-teal">{item.crumb}</span>
              <span className="mt-1 block">{item.note}</span>
            </li>
          ))}
        </ol>
      </Section>

      <section className="mt-8 rounded-xl border border-line bg-amber-soft p-4">
        <h2 className="font-display text-2xl text-ink">Done when</h2>
        <ul className="mt-3 grid gap-x-6 gap-y-1 sm:grid-cols-2">
          {checklist.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

function Section({
  id,
  n,
  title,
  children,
}: {
  id: string;
  n: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mt-8 scroll-mt-6 border-t border-line pt-6">
      <p className="text-sm font-semibold tracking-wide text-teal">{n}</p>
      <h2 className="font-display text-2xl text-ink">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

function Crumb({ parts }: { parts: string[] }) {
  return (
    <p className="rounded-md bg-teal-soft px-3 py-2 font-mono text-sm leading-snug break-words text-teal">
      {parts.map((part, index) => (
        <span key={`${part}-${index}`}>
          {index > 0 && <span className="text-muted"> › </span>}
          {part}
        </span>
      ))}
    </p>
  );
}

function Callout({ children }: { children: ReactNode }) {
  return (
    <p className="border-l-4 border-teal bg-teal-soft px-4 py-3 text-ink">
      {children}
    </p>
  );
}

const deeper = [
  {
    title: "Activate the Virtual Agent plugins",
    crumb: "All › Conversational Interfaces › Home",
    note: "Glide Virtual Agent (com.glide.cs.chatbot), plus the Omni-Experience Standard Feature Set store app.",
  },
  {
    title: "Add the bot to the web portal",
    crumb: "All › Conversational Interfaces › Home › Add to portal",
    note: "Same table: All › Service Portal › Agent Chat (sp_agent_chat_config). Open /sp as a requester.",
  },
  {
    title: "Brand image and colors",
    crumb: "All › Conversational Interfaces › Home › Set up branding",
    note: "Record on sys_cs_branding_setup. Apply the branding key or the portal still shows the default.",
  },
  {
    title: "Teams or Slack, including notifications",
    crumb: "All › Conversational Interfaces › Settings › Integrations",
    note: "Install the store integration, connect the tenant, then turn notifications on for that channel.",
  },
  {
    title: "Conversational Analytics",
    crumb: "All › Conversational Interfaces › Home",
    note: "Store app sn_ci_analytics. Open the dashboard and read it, do not only install it.",
  },
  {
    title: "ITSM or HRSD conversations",
    crumb: "ServiceNow Store › Opt-in",
    note: "ITSM Virtual Agent Conversations (sn_itsm_va) or the HRSD conversations app. Topics stay inactive until you publish them.",
  },
  {
    title: "Topic Recommendations",
    crumb: "All › Conversational Interfaces › Virtual Agent › Topic Recommendations",
    note: "sn_topic_recommend. Define a report, run it, duplicate a suggested topic, then test and publish the copy.",
  },
  {
    title: "Greetings and setup topics",
    crumb: "All › Conversational Interfaces › Settings › Virtual Agent › Custom Greetings and Setup",
    note: "Dynamic Greeting, Search Fallback or AI Search - Fallback, and one Promoted topic.",
  },
  {
    title: "Agent Chat",
    crumb: "All › Conversational Interfaces › Home › Agent Chat",
    note: "com.glide.interaction.awa, Live Agent Support published, AWA queue, fulfiller UI on sys_cs_live_agent_setup set to Agent Workspace.",
  },
  {
    title: "NLU",
    crumb: "All › Conversational Interfaces › Settings › Virtual Agent › NLU",
    note: "One intent per topic. Setup-topic model is com.glide.cs.nlu.topics. Keywords remain the backup.",
  },
  {
    title: "Create or duplicate a topic and publish",
    crumb: "All › Collaboration › Virtual Agent › Designer",
    note: "sys_cs_topic needs Active and Published. Save is not publish.",
  },
  {
    title: "Mobile",
    crumb: "All › System Mobile › Mobile App Builder",
    note: "Chat launcher function, context Global, on the Now Mobile homepage. Or Assistants › Display experience › Mobile.",
  },
  {
    title: "Test in three places",
    crumb: "Home preview, then Designer preview, then the portal",
    note: "Happy path, a nonsense utterance, an empty lookup, and the live-agent branch.",
  },
  {
    title: "Localize, if you need another language",
    crumb: "Designer › Manage languages",
    note: "Or Dynamic Translation (com.glide.cs.dynamic.translation.virtual_agent). Re-test each language.",
  },
];

const checklist = [
  "Designer opens after Glide Virtual Agent is active",
  "Branding record saved and branding key applied",
  "Portal chat opens and shows that logo and avatar",
  "Now Mobile chat launcher opens the same bot",
  "Handoff reaches Agent Workspace with the transcript",
  "One published topic runs in Teams or Slack",
  "Topic was tested, then published, not only saved",
  "Each language you enabled was previewed",
  "Target instance recommitted the update set and rechecked the portal",
  "A transfer produced a notification",
  "Analytics shows finish vs transfer, not just your test user",
];
