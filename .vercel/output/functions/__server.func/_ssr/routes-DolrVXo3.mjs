import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DolrVXo3.js
var import_jsx_runtime = require_jsx_runtime();
var stages = [
	{
		id: "minimum",
		n: "00",
		label: "Minimum"
	},
	{
		id: "guided",
		n: "01",
		label: "Guided Setup"
	},
	{
		id: "plan",
		n: "02",
		label: "Plan vs if-then"
	},
	{
		id: "install",
		n: "03",
		label: "Install"
	},
	{
		id: "brand",
		n: "04",
		label: "Brand"
	},
	{
		id: "portal",
		n: "05",
		label: "Portal"
	},
	{
		id: "mobile",
		n: "06",
		label: "Mobile"
	},
	{
		id: "handoff",
		n: "07",
		label: "Handoff"
	},
	{
		id: "channels",
		n: "08",
		label: "Channels"
	},
	{
		id: "topics",
		n: "09",
		label: "Topics"
	},
	{
		id: "operate",
		n: "10",
		label: "Monitor"
	},
	{
		id: "deeper",
		n: "11",
		label: "Checklist"
	}
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-5 py-8 sm:px-8 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "border-b border-line pb-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold tracking-wide text-teal uppercase",
						children: "Click-path brief · Tokyo and later"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl leading-tight text-ink sm:text-5xl",
						children: "Virtual Agent Implementation"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-lg leading-snug text-ink",
						children: [
							"From plugin activation through continual monitoring. Each stage is the navigator path, the table or property that holds the setting, and the smallest thing that counts as done. Only ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "admin" }),
							" can turn plugins and store apps on. After that,",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "virtual_agent_admin" }),
							" builds the bot and",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "awa_admin" }),
							" routes the live-agent handoff. The configuration to-dos follow",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "font-semibold text-teal underline",
								href: "https://www.servicenow.com/community/virtual-agent-nlu-articles/virtual-agent-implementation-checklist-a-deeper-dive/ta-p/2306564",
								children: "Virtual Agent implementation checklist — a deeper dive"
							}),
							" ",
							"by Victor Chen (ServiceNow, 24 July 2022)."
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"aria-label": "Sections",
				className: "no-print mt-6 flex flex-wrap gap-2",
				children: [stages.map((stage) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `#${stage.id}`,
					className: "rounded-full border border-line bg-card px-3 py-2 text-sm font-semibold text-ink hover:border-teal hover:text-teal",
					children: [
						stage.n,
						" ",
						stage.label
					]
				}, stage.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => window.print(),
					className: "rounded-full bg-teal px-3 py-2 text-sm font-semibold text-card",
					children: "Print brief"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "minimum",
				n: "00",
				title: "Bare minimum to stand a bot up",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"You do not design a custom conversation on day one. You need a starting point, one product choice, one portal, and at least one",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "published" }),
						" topic. Unpublished topics are invisible."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-ink",
						children: "Choose the starting point"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Not every organization starts the same way. Match the license before you touch a plugin." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-line bg-card p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold text-ink",
								children: "Full Virtual Agent license"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-muted",
								children: [
									"ITSM Pro, HRSD Pro, or Enterprise. The course company Cloud Dimensions is this case. Activate Glide Virtual Agent (",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "com.glide.cs.chatbot" }),
									") and follow the stages below."
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-line bg-teal-soft p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold text-ink",
								children: "ITSM Standard, no full license"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-ink",
								children: [
									"Virtual Agent Lite is already on the instance (",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "com.glide.cs.chatbot.lite" }),
									"). Do not install the full plugin. In Designer, review the prebuilt ITSM conversations, duplicate the ones you will use, and publish them."
								]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Lite is a smaller product: NLU is limited, and there is no Conversational Analytics dashboard. It is still a working chat you can put on a portal, and it is the base you upgrade from when the full license arrives." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-ink",
						children: "Three roles, three jobs"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"The ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "admin" }),
						" role is required to activate plugins and store applications. A Virtual Agent admin or an AWA admin cannot do that step. Once the plugins are active, those two roles do the rest of the implementation. They are not extra people standing next to the bot. They own two different halves of it."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "list-disc space-y-2 pl-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "admin" }), " installs Glide Virtual Agent, the ITSM or HR conversations app, Agent Chat, Omni-Experience, Analytics, and Teams or Slack. On a domain-separated instance, do this from the global domain."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "virtual_agent_admin" }), " is the bot builder. Designer, greetings, branding, NLU, the portal chat experience, and publish. This role does not activate plugins. Give it to the person who will change topics after go-live, instead of leaving them on admin."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "awa_admin" }),
								" routes the live chat after the bot gives up. When the user asks for a person, or a topic hits",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Handover to agent" }),
								", the conversation becomes an AWA work item. This role sets the chat service channel, the queues (a password topic can go to a different team than a hardware topic), and the assignment rules. It also sets presence (online, away, busy), skills, and how many chats an agent can hold, so the work item lands only on a qualified agent who is available in Agent Workspace. Path: ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "All › Advanced Work Assignment" }),
								". The person who answers needs ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "awa_agent" }),
								", not awa_admin."
							] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "One person who already has admin can do all three. The split matters when the bot builder is not the platform admin, and when the team that staffs live agents is not the team that writes topics." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "list-decimal space-y-2 pl-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Confirm which bot you have." }),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "All › System Definition › Plugins" }),
								". If Glide Virtual Agent is missing and Lite is active, stay on the Lite path. Role: admin."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Say what the bot is for." }), " ITSM, HR, or another line of business, and whether live agents are in scope. That answer is the plan. It is not a flowchart."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Activate, only if you hold the full license." }),
								" Glide Virtual Agent (",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "com.glide.cs.chatbot" }),
								") and the matching store conversations (ITSM Virtual Agent Conversations). Lite already has its ITSM conversations. Do not install the full plugin on a Standard instance."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Put it on one portal" }),
								" and open ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "/sp" }),
								" as a requester."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Publish" }), " the greeting plus one real topic (for example Check ticket status). Save is not publish."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Watch it, if you have the full product." }), " After people use it, open Conversational Analytics. Lite has no such dashboard. Until you upgrade, your check is the three test places: Home, Designer, and the portal."] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "Skip mobile, Teams, custom branding, and extra languages until the portal conversation finishes a real request. Those are the same bot on more doors, not a second implementation." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "guided",
				n: "01",
				title: "Conversational Interfaces Guided Setup",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Guided Setup does not install a generic checklist. A short survey reads your entitlements and your answers, then builds the task list you actually see. Tasks sit in categories (plugins, chat clients, agent chat, and so on). Do them in the order shown." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crumb, { parts: [
						"All",
						"Guided Setup",
						"Conversational Interfaces Guided Setup"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-ink",
						children: "Things to consider before you click through"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Answer these on the setup page before you pick Quick or Manual. The page has three tabs: ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "General Setup" }),
						",",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Virtual Agent Setup" }),
						", and",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Agent Chat Setup" }),
						". General Setup decides who is in scope, who is allowed to configure it, where users will reach it, and how it should look. The other two tabs ask the same kind of questions for the bot and for live chat. A wrong answer here hides tasks you will need later."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "list-disc space-y-2 pl-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "What types of agents?" }), " Live agents, Virtual Agent, or both. Virtual only drops the Agent Chat and AWA tasks. Live only drops topic design. Both keeps the handoff path in section 07."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Which roles?" }), " System admin installs the plugins. Virtual Agent admin configures the bot. AWA admin configures the queues. Name the people before the task list appears, or the install stalls on a role nobody holds."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Which channels?" }), " Web portals, ServiceNow Mobile, a supported messaging app (Slack, SMS with Twilio, Teams, Workplace), or a custom channel such as a proprietary chat app. Also decide who has admin access in that third-party app. Install only the channels you named. A custom channel is a build, not a store app."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Look and feel?" }), " Corporate colors, logos and icons, support details such as email and hours, and the conversational lines: greeting, fallback, and closing. Colors and the logo are the branding record. The three lines are setup topics, not branding."] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "list-decimal space-y-2 pl-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Select ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Get Started" }),
								"."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Open ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Customize your setup" }),
								" and select ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Configure" }),
								"."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Answer what kind of bot this is: ITSM, HR, ITBM, Field Service, and whether you also want ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Workspace Agent Chat" }),
								". The task list drops work for products you did not select."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Choose ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Quick setup" }),
								" or ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Manual setup" }),
								", then ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Continue" }),
								"."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Work the tasks top to bottom. Mark each one complete only after you have verified it (Designer opens, portal chat opens)." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-line bg-card p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold text-ink",
								children: "Quick setup"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-muted",
								children: "The minimum steps for a basic agent. Plugins, one portal, branding optional, prebuilt topics. Use this when you want a working bot this week and you will not hand-build every topic."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-line bg-teal-soft p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold text-ink",
								children: "Manual setup"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-ink",
								children: "The full list: every plugin, Virtual Agent, Agent Chat, AWA, integrations, and notifications. Use this when you are implementing, not trialing. The course walks Manual so you see every task Quick would have hidden."
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The first block (install and enable) is once per instance. Come back to the rest when you add a portal, a language, or a channel. On an upgrade, Guided Setup keeps tasks you already finished. Work done before this guided setup existed has to be selected by hand." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Home tiles are the same jobs without the survey:",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "All › Conversational Interfaces › Home" }),
						". Use Home when the guided list is already done and you are changing one thing."
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "plan",
				n: "02",
				title: "The plan is not the if-then",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Yes, you need a plan of what the agent is allowed to do. That plan is a short list of jobs, not a script of every question." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-ink",
						children: "Plan — what the bot may do"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Write the jobs before you open Designer: reset a password, check an incident, order a laptop. Each job becomes one topic. Anything not on the list stays unpublished, so the bot cannot start it. The survey in Guided Setup is this plan in product form (ITSM, and live agent or not)." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-ink",
						children: "Finding the topic — not if-then"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"The user types a sentence. Virtual Agent matches ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "one intent per topic" }),
						" (NLU) or the ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Keywords" }),
						" on Topic Properties. One match starts that topic. Several matches show a choice list. None runs the Fallback setup topic, or AI Search Fallback if you turned that on."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Property ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "com.glide.cs.max_number_display_topics" }),
						" is how many matches to show. Default is 3. Keywords are the backup when NLU finds nothing, too many intents, or the language has no NLU model."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-ink",
						children: "If-then — only after a topic has started"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Inside Designer, a ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Decision" }),
						" control branches on a value you already collected. Example: a Boolean “Add a comment?” If Yes, take the comment branch. If No, end. The Decision has no properties of its own. The condition sits on each branch (the first branch is labeled Always until you change it)."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "That if-then never chooses which topic to open. It only steers a conversation that has already begun. Prebuilt ITSM topics already contain these branches. You write new ones only when a published topic does not cover the job." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Setup topics are the frame around every job, not extra if-then: Greeting (Dynamic Greeting says the user’s name), Fallback, Anything Else, Closing, Survey, Live Agent Support. They are chosen on the chat experience, not discovered like a normal topic." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crumb, { parts: [
						"All",
						"Conversational Interfaces",
						"Settings",
						"Virtual Agent",
						"Custom Greetings and Setup"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Survey odds: ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "com.glide.cs.survey.probability" }),
						" (0.33 means the feedback topic appears in about a third of conversations). Table for topics: ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "sys_cs_topic" }),
						" — both ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Active" }),
						" and ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Published" }),
						" must be true."
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "install",
				n: "03",
				title: "Install and verify plugins",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crumb, { parts: [
						"All",
						"Conversational Interfaces",
						"Home"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "list-decimal space-y-2 pl-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"If the home page says Virtual Agent is not installed, select ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Get Virtual Agent plugin" }),
								", then ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Start install" }),
								"."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"On the Applications page, Glide Virtual Agent (",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "com.glide.cs.chatbot" }),
								") is selected. Choose ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Install/Update All" }),
								", then ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Install" }),
								"."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Back on Home, under the request-type tiles, select ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Get ITSM plugin" }),
								" (or HR) and ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Opt-in" }),
								" on the Store app. Repeat for Conversational Analytics if you will report later."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Also install the store app ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Omni-Experience Standard Feature Set" }),
								". Chen flags this next to the Virtual Agent plugins. It is the bundle behind the Conversational Interfaces admin console. Do not skip it because the Home page already looks finished."
							] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Same plugin if the Home tile is missing:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crumb, { parts: [
						"All",
						"System Definition",
						"Plugins"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "list-decimal space-y-2 pl-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Search ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Glide Virtual Agent" }),
							". Select ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Install" }),
							", then ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Activate" }),
							". You need a Virtual Agent subscription. In a domain-separated instance, activate from the global domain."
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Confirm it landed: ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "All → Collaboration → Virtual Agent → Designer" }),
							". The topic list should open. Setup topics are active; prebuilt ITSM topics stay inactive until you publish them."
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
						"Also expect these to come with the core plugin: web client (",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "com.glide.cs.sn-va-web-client-app" }),
						"), Designer (",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "com.snc.conversation_builder" }),
						"), branding (",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "com.glide.cs.branding" }),
						"), and platform topics. Do not brand until Designer opens."
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "brand",
				n: "04",
				title: "Brand the chat client",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This changes logo, colors, and the bot icon the requester sees. It is not Agent Client Collector." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crumb, { parts: [
						"All",
						"Conversational Interfaces",
						"Home",
						"Edit your bot's look and feel",
						"Set up branding"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Longer path to the same form:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crumb, { parts: [
						"All",
						"Conversational Interfaces",
						"Settings",
						"Display options",
						"Branding",
						"View All"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "list-decimal space-y-2 pl-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Select ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "New" }),
								", or open the branding record you will change. Records live on ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Branding" }),
								" (",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "sys_cs_branding_setup" }),
								")."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Fill the chat fields:", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-1 list-disc pl-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Name" }),
										" — the label you will recognize later. The ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "branding key" }),
										" is what portals and embedded clients actually reference."
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Header logo" }),
										" — ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Attach Image" }),
										". This is the logo in the chat header and, in a browser window, the tab icon. Replace it with ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "View image" }),
										"; remove it with the trash icon."
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Bot profile / avatar" }), " — the picture beside bot messages. Use a square image (docs call out 144×144 for the premium-chat logo). Accepted types include jpg, png, gif, svg."] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Colors" }),
										" — header, background, and the bot and user bubbles, where those fields are on the form. The console shows a subset; the table has more (agent bubble, bot bubble font). Add them with ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Configure → Form Layout" }),
										" if you need them."
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Menu items" }), " — chat, phone, email, or your own. Save each menu item before leaving that section."] })
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Select ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Save" }),
								" or ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Update" }),
								". Copy the branding key."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Point a client at that key. A saved branding record does nothing until something references it.", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-1 list-disc pl-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Portal:" }),
										" on the Agent Chat configuration (next section), set the branding, or pass ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "branding_key" }),
										" from the configuration server script."
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Web client URL:" }),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "$sn-va-web-client-app.do?sysparm_branding_key=your_key" })
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Embedded page:" }),
										" add ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "sysparm_branding_key=your_key" }),
										" on the iframe ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "src" }),
										"."
									] })
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Open the portal as a requester. Confirm header logo, bot avatar, and colors before you call branding done." })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "portal",
				n: "05",
				title: "Enable the portal web client",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crumb, { parts: [
						"All",
						"Conversational Interfaces",
						"Home",
						"Add your bot to a portal",
						"Add to portal"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Same table without the tile:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crumb, { parts: [
						"All",
						"Service Portal",
						"Agent Chat"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "list-decimal space-y-2 pl-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Open the base ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Service Portal Agent Chat Config" }),
								", or select ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "New" }),
								"."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Name" }),
								" — a unique name. Course labs often require a specific name such as ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "VA" }),
								"."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Portals" }),
								" — select the lock, then the search icon, and choose ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Service Portal" }),
								" (or Employee Center). Empty means every portal."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Order" }), " — lowest number wins when two configs target the same portal. Only one config runs per portal."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Active" }), " — selected. Inactive means the launcher never appears."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Select ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Submit" }),
								" or ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Update" }),
								". The record is on ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "sp_agent_chat_config" }),
								"."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Open the portal (",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "/sp" }),
								") while logged in as a requester. The chat control should be on the page. Start a conversation and confirm the branding from the previous step."
							] })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "mobile",
				n: "06",
				title: "iOS and Android",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"There is no separate Virtual Agent install per phone. Requesters use ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Now Mobile" }),
						" (Apple App Store and Google Play) against this instance. Branding you saved in Conversational Interfaces is what mobile uses; you do not recolor the bot inside Mobile App Builder."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crumb, { parts: [
						"All",
						"System Mobile",
						"Mobile App Builder"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "list-decimal space-y-2 pl-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Plugins already required: Glide Virtual Agent, plus the mobile app plugins for Now Mobile." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Create a function of type ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Chat launcher" }),
								". Set context to ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Global" }),
								"."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Add that function as a quick action on the Now Mobile homepage (top corner, or the center item on the bottom bar in later releases)." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Save, then force-close and reopen Now Mobile on the device so it picks up the applet." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "If the instance uses assistants instead of the older launcher:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crumb, { parts: [
						"All",
						"Conversational Interfaces",
						"Assistants",
						"your assistant",
						"Display experience",
						"Mobile"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "list-decimal space-y-2 pl-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Select the mobile chat function, save, and refresh the app." })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "handoff",
				n: "07",
				title: "Live agent handoff",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Three layers have to agree. A topic node alone does not route anyone. The Virtual Agent admin publishes the handoff topic. The AWA admin makes a queue that can receive it. The platform admin is the one who activated Agent Chat." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-ink",
						children: "1. Turn Agent Chat on"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crumb, { parts: [
						"All",
						"Conversational Interfaces",
						"Home",
						"Agent Chat"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "list-decimal space-y-2 pl-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Enable ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Activate" }),
							". Set the transfer message (for example, “Please stand by while I connect you to a live agent.”). Save."
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"If the tile is missing, activate plugin ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Agent Chat" }),
							" (",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "com.glide.interaction.awa" }),
							") from ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "System Definition → Plugins" }),
							"."
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-ink",
						children: "2. Point the bot at a real handoff topic"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crumb, { parts: [
						"All",
						"Conversational Interfaces",
						"Settings",
						"Virtual Agent",
						"Custom Greetings and Setup"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "list-decimal space-y-2 pl-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Open the chat experience you use (often ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Default chat experience" }),
								")."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Set ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Live Agent Context" }),
								" to the base ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Live Agent Support" }),
								" topic. Save."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"In Designer, confirm that topic is ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Active" }),
								" and ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Published" }),
								" (",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "sys_cs_topic.list" }),
								"). On your own topics, drop in the ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Handover to agent" }),
								" control where the bot should give up."
							] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-ink",
						children: "3. Give the work a queue"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Role: ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "awa_admin" }),
						". The transfer is not finished when the bot says it is connecting you. AWA turns that chat into a work item and offers it only to an agent who is online, has the skill, and still has capacity."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crumb, { parts: [
						"All",
						"Advanced Work Assignment",
						"Queues"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "list-decimal space-y-2 pl-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Confirm a ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "chat" }),
								" service channel exists. A queue with no channel never receives the handoff."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Open the chat queue. Point specialized topics at the right team (passwords to identity, hardware to the desk). The work-item condition must match how interactions are created. They are created in ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Work in Progress" }),
								". A condition that only matches ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "New" }),
								" means agents never see the chat."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Set the assignment rule, agent skills, presence states (online, away, busy), and capacity. An agent at capacity, or marked away, must not receive the next transfer." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"On ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "sys_cs_live_agent_setup.list" }),
								", set ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "ITSM Fulfiller UI" }),
								" and ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Global Fulfiller UI" }),
								" to ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Agent Workspace" }),
								", not Connect. Save."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Test twice: a topic that finishes in the bot, and a transfer that lands in Agent Workspace with the prior messages still on the interaction." })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "channels",
				n: "08",
				title: "Pre-built messaging apps",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crumb, { parts: [
						"All",
						"System Applications",
						"All Available Applications",
						"All"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "list-decimal space-y-2 pl-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Install the store app for the channel you will actually use: ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Conversational Integration with Microsoft Teams" }),
							" or ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Slack" }),
							". Opt in. Do not start with the custom chat adapter (",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "com.glide.cs.custom.adapter" }),
							"); that is a build, not this course’s path."
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Connect it from the console:" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crumb, { parts: [
						"All",
						"Conversational Interfaces",
						"Settings",
						"Integrations"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "list-decimal space-y-2 pl-5",
						start: 2,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Open the provider (Teams or Slack). Complete the tenant or workspace link the page asks for, and set the bot name and icon for that channel. Those are channel fields; they do not replace the branding record." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Save. In the external app, send a phrase you know maps to a ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "published" }),
							" topic. If the portal topic works and Teams does not, the topic is fine and the provider link is not."
						] })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "topics",
				n: "09",
				title: "Build, test, publish, move",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crumb, { parts: [
						"All",
						"Collaboration",
						"Virtual Agent",
						"Designer"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "list-decimal space-y-2 pl-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Plan" }), " before the canvas. Pick one job from incidents, catalog items, or repeated agent work. Write the branches on paper: start, choices, empty search, handoff, end."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "New" }), " topic, or open an inactive prebuilt topic. Set name, description, and category. Keep keywords or NLU intents on that one intent only."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Build" }), " between Start and End. Use Text, Link, Card, and the record controls. Avoid custom HTML so portal, Now Mobile, and Teams render the same nodes. Script only when no control does the lookup."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Test" }), " with the Designer preview: happy path, a nonsense utterance, an empty lookup, and the handover node."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Publish" }), ". Until you publish, the topic stays off the requester’s topic list. Save is not publish."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Greeting and promoted topics are not on the topic canvas:" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crumb, { parts: [
						"All",
						"Conversational Interfaces",
						"Settings",
						"Virtual Agent",
						"Custom Greetings and Setup",
						"Default chat experience"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "list-decimal space-y-2 pl-5",
						start: 6,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"On ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Default chat experience" }),
							", set these by name. They ship with the ITSM conversations app:",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-1 list-disc pl-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Greeting" }),
										" — ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Dynamic Greeting" }),
										". It addresses the user by name."
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Fallback" }),
										" — ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Search Fallback" }),
										"."
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										"If AI Search is on, use ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "AI Search - Fallback" }),
										" instead, so a missed utterance returns search results rather than a dead end."
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Promoted Topics" }), " — pin one topic people already ask for. It shows on the greeting."] })
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Save. Re-open the portal and confirm the greeting uses the name, the promoted topic is visible, and a nonsense sentence hits search fallback rather than silence." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-ink",
						children: "Topic Recommendations, then NLU"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crumb, { parts: [
						"All",
						"Conversational Interfaces",
						"Virtual Agent",
						"Topic Recommendations"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "list-decimal space-y-2 pl-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Install ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Topic Recommendations" }),
								" (",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "sn_topic_recommend" }),
								"). It needs NLU Workbench and the ITSM Virtual Agent Conversations app. The page stays empty until you define a report."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Configure analysis on Incident, Request, live-agent transcripts, or Virtual Agent fallback utterances. Run it. You get a ranked list: topics Virtual Agent can already handle, and intents you would have to build." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"For a match, ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "duplicate" }),
								" the prebuilt topic. Do not publish the suggestion in place. Test the copy, then publish."
							] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crumb, { parts: [
						"All",
						"Conversational Interfaces",
						"Settings",
						"Virtual Agent",
						"NLU"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "list-decimal space-y-2 pl-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Turn NLU on for topic discovery. Map one intent to each topic. Setup-topic NLU is ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "com.glide.cs.nlu.topics" }),
							". Keywords stay as the backup."
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-ink",
						children: "Where to test"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Chen’s three places, in this order: the preview on ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Conversational Interfaces Home" }),
						", the preview inside ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Designer" }),
						", then the ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "portal" }),
						" as a requester. Designer-only is not done."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-ink",
						children: "Languages"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crumb, { parts: ["Designer", "Manage languages"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "list-decimal space-y-2 pl-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Turn on only the languages you will test. Request or enter translations for the topic text." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Plugin behind dynamic translation is ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "com.glide.cs.dynamic.translation.virtual_agent" }),
							". Re-run the preview in each language. A longer translated button label is a real defect, not a wording nit."
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-ink",
						children: "Move the topic to another instance"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crumb, { parts: [
						"All",
						"System Update Sets",
						"Local Update Sets"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "list-decimal space-y-2 pl-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Set your update set to In progress ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "before" }),
								" you change the topic, or the topic will not be in the set."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Complete" }),
								" the set, then on the target instance ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Retrieved Update Sets → Import → Preview → Commit" }),
								"."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "The topic can arrive while the portal config, branding key, queue, and Teams link stay behind. Repeat the portal, branding, and publish checks on the target. Then open the portal there." })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "operate",
				n: "10",
				title: "Notifications, then continual monitoring",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-ink",
						children: "Notifications"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crumb, { parts: [
						"All",
						"System Definition",
						"Plugins"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "list-decimal space-y-2 pl-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Confirm ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Virtual Agent Notification" }),
								" (",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "com.glide.cs.notification" }),
								") is active. Actionable notifications are ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "com.glide.cs.actionable.notification" }),
								"."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "For Teams or Slack, enable the channel’s notification option on the same integration record you connected above. A handoff that only speaks inside the open portal window goes silent on the phone." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Trigger a transfer as a requester and confirm a notification actually arrives." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-ink",
						children: "Conversational Analytics"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crumb, { parts: [
						"All",
						"Conversational Interfaces",
						"Home"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "list-decimal space-y-2 pl-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Install the ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Conversational Analytics" }),
								" store app (",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "sn_ci_analytics" }),
								") if the dashboard tile is absent."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Open the dashboard. Read four numbers on a schedule, not once: topics that run, topics that finish, topics that transfer, topics with no traffic." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Rewrite or retire from that list, publish again, and read the same widgets after real use. Monitoring is that loop. A topic that only looks good in your test chats is not monitored." })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "deeper",
				n: "11",
				title: "Deeper-dive checklist",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"These are the configuration to-dos from",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "font-semibold text-teal underline",
							href: "https://www.servicenow.com/community/virtual-agent-nlu-articles/virtual-agent-implementation-checklist-a-deeper-dive/ta-p/2306564",
							children: "Virtual Agent implementation checklist — a deeper dive"
						}),
						", written by ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Victor Chen" }),
						", ServiceNow (published 24 July 2022, edited 24 March 2023). His workbook is attached here:",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "font-semibold text-teal underline",
							href: "/VA-checklist-deeper-dive.xlsx",
							download: true,
							children: "VA checklist - deeper dive.xlsx"
						}),
						". The file properties list him as creator (25 July 2022). It has one sheet and three columns: the to-do, a docs link, and a Done checkbox. There are no extra rows beyond the list below."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "He assumes you already finished the earlier readiness checklist: Knowledge Base in shape, Service Catalog ready for the bot to order from, and a change process for what you publish. Do that before the list below." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "list-decimal space-y-3 pl-5",
						children: deeper.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: item.title }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block font-mono text-sm break-words text-teal",
								children: item.crumb
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block",
								children: item.note
							})
						] }, item.title))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 rounded-xl border border-line bg-amber-soft p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl text-ink",
					children: "Done when"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 grid gap-x-6 gap-y-1 sm:grid-cols-2",
					children: checklist.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
					}, item))
				})]
			})
		]
	});
}
function Section({ id, n, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id,
		className: "mt-8 scroll-mt-6 border-t border-line pt-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold tracking-wide text-teal",
				children: n
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl text-ink",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 space-y-3",
				children
			})
		]
	});
}
function Crumb({ parts }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "rounded-md bg-teal-soft px-3 py-2 font-mono text-sm leading-snug break-words text-teal",
		children: parts.map((part, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [index > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted",
			children: " › "
		}), part] }, `${part}-${index}`))
	});
}
function Callout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "border-l-4 border-teal bg-teal-soft px-4 py-3 text-ink",
		children
	});
}
var deeper = [
	{
		title: "Activate the Virtual Agent plugins",
		crumb: "All › Conversational Interfaces › Home",
		note: "Glide Virtual Agent (com.glide.cs.chatbot), plus the Omni-Experience Standard Feature Set store app."
	},
	{
		title: "Add the bot to the web portal",
		crumb: "All › Conversational Interfaces › Home › Add to portal",
		note: "Same table: All › Service Portal › Agent Chat (sp_agent_chat_config). Open /sp as a requester."
	},
	{
		title: "Brand image and colors",
		crumb: "All › Conversational Interfaces › Home › Set up branding",
		note: "Record on sys_cs_branding_setup. Apply the branding key or the portal still shows the default."
	},
	{
		title: "Teams or Slack, including notifications",
		crumb: "All › Conversational Interfaces › Settings › Integrations",
		note: "Install the store integration, connect the tenant, then turn notifications on for that channel."
	},
	{
		title: "Conversational Analytics",
		crumb: "All › Conversational Interfaces › Home",
		note: "Store app sn_ci_analytics. Open the dashboard and read it, do not only install it."
	},
	{
		title: "ITSM or HRSD conversations",
		crumb: "ServiceNow Store › Opt-in",
		note: "ITSM Virtual Agent Conversations (sn_itsm_va) or the HRSD conversations app. Topics stay inactive until you publish them."
	},
	{
		title: "Topic Recommendations",
		crumb: "All › Conversational Interfaces › Virtual Agent › Topic Recommendations",
		note: "sn_topic_recommend. Define a report, run it, duplicate a suggested topic, then test and publish the copy."
	},
	{
		title: "Greetings and setup topics",
		crumb: "All › Conversational Interfaces › Settings › Virtual Agent › Custom Greetings and Setup",
		note: "Dynamic Greeting, Search Fallback or AI Search - Fallback, and one Promoted topic."
	},
	{
		title: "Agent Chat",
		crumb: "All › Conversational Interfaces › Home › Agent Chat",
		note: "com.glide.interaction.awa, Live Agent Support published, AWA queue, fulfiller UI on sys_cs_live_agent_setup set to Agent Workspace."
	},
	{
		title: "NLU",
		crumb: "All › Conversational Interfaces › Settings › Virtual Agent › NLU",
		note: "One intent per topic. Setup-topic model is com.glide.cs.nlu.topics. Keywords remain the backup."
	},
	{
		title: "Create or duplicate a topic and publish",
		crumb: "All › Collaboration › Virtual Agent › Designer",
		note: "sys_cs_topic needs Active and Published. Save is not publish."
	},
	{
		title: "Mobile",
		crumb: "All › System Mobile › Mobile App Builder",
		note: "Chat launcher function, context Global, on the Now Mobile homepage. Or Assistants › Display experience › Mobile."
	},
	{
		title: "Test in three places",
		crumb: "Home preview, then Designer preview, then the portal",
		note: "Happy path, a nonsense utterance, an empty lookup, and the live-agent branch."
	},
	{
		title: "Localize, if you need another language",
		crumb: "Designer › Manage languages",
		note: "Or Dynamic Translation (com.glide.cs.dynamic.translation.virtual_agent). Re-test each language."
	}
];
var checklist = [
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
	"Analytics shows finish vs transfer, not just your test user"
];
//#endregion
export { Home as component };
