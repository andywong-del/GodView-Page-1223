import { Conversation, Testimonial } from './types';

export const ROW_1: Testimonial[] = [
    { name: "Mark D.", role: "VP of Sales", img: "11", quote: "We ended all excuses instantly. Zero leads ignored. 32% jump in conversion in the first week.", highlight: "32% jump in conversion", color: "green" },
    { name: "Sarah K.", role: "E-commerce Founder", img: "5", quote: "We just copied my top seller's chat history. Average rep performance doubled. Easiest hack ever.", highlight: "Performance doubled", color: "yellow" },
    { name: "David L.", role: "Agency Owner", img: "13", quote: "Top rep tried to steal our $50k client list. GodView secured everything first. Kept the clients.", highlight: "Worth every penny", color: "blue" },
    { name: "Alex R.", role: "Small Business CEO", img: "12", quote: "I saw a huge deal slipping away live. Used GodView to save it in literally three minutes.", highlight: "save it in 3 minutes", color: "purple" },
    { name: "Jessica T.", role: "B2B Manager", img: "9", quote: "Fixed our slow response times. Beat our biggest rival on two major accounts instantly.", highlight: "Beat biggest rival", color: "red" }
];

export const ROW_2: Testimonial[] = [
    { name: "James P.", role: "Real Estate Lead", img: "60", quote: "My team was slacking. GodView exposed it day one. Now everyone is on fire.", highlight: "Exposed it day one", color: "orange" },
    { name: "Emily W.", role: "SaaS Director", img: "44", quote: "Syncing sales phones to the backend is genius. I have total control now.", highlight: "Total control", color: "cyan" },
    { name: "Robert M.", role: "Auto Dealer", img: "33", quote: "We stopped losing leads to 'forgotten' follow-ups. Revenue up 40%.", highlight: "Revenue up 40%", color: "emerald" },
    { name: "Linda C.", role: "Recruitment Head", img: "24", quote: "The cloning feature is real. My new hires sell like pros in week one.", highlight: "Sell like pros", color: "pink" },
    { name: "Kevin B.", role: "Marketing Lead", img: "59", quote: "Finally, I know exactly what my sales team is saying to the leads I generate.", highlight: "Exact visibility", color: "indigo" }
];

export const CONVERSATIONS: Conversation[] = [
    {
        id: 1, clientName: "Michael", repName: "Sales A (Jessie)", repId: "A", avatarColor: "bg-blue-600", status: "Good", statusEmoji: "👍", statusColor: "text-green-500", statusBg: "bg-green-500/20", time: "09:40", lastMsg: "Deal. Send me the contract.",
        messages: [
            { side: "left", text: "Can I get a discount?", time: "09:30" },
            { side: "right", text: "I can offer 5% if signed today.", time: "09:32" },
            { side: "left", text: "Deal. Send me the contract.", time: "09:40" },
            { side: "right", text: "Sending it over right now! 📄", time: "09:41" }
        ]
    },
    {
        id: 2, clientName: "Sarah", repName: "Sales B (Mark)", repId: "B", avatarColor: "bg-purple-600", status: "Poor", statusEmoji: "👎", statusColor: "text-red-500", statusBg: "bg-red-500/20", time: "14:45", lastMsg: "Hello? Is anyone there?",
        messages: [
            { side: "left", text: "I have a critical issue.", time: "12:00" },
            { side: "left", text: "Can someone help?", time: "13:30" }, 
            { side: "left", text: "Hello? Is anyone there?", time: "14:45" }
        ]
    },
    {
        id: 3, clientName: "David", repName: "Sales C (Alex)", repId: "C", avatarColor: "bg-orange-600", status: "Weak", statusEmoji: "🤔", statusColor: "text-yellow-500", statusBg: "bg-yellow-500/20", time: "14:08", lastMsg: "I don't understand...",
        messages: [
            { side: "left", text: "How does the pricing work?", time: "13:50" },
            { side: "right", text: "It depends on the algorithm.", time: "13:55" },
            { side: "left", text: "What does that even mean?", time: "14:05" },
            { side: "right", text: "The flux capacitor model.", time: "14:06" },
            { side: "left", text: "I don't understand...", time: "14:08" }
        ]
    }
];