export interface Testimonial {
    name: string;
    role: string;
    img: string;
    quote: string;
    highlight: string;
    color: string;
}

export interface Message {
    side: "left" | "right";
    text: string;
    time: string;
}

export interface Conversation {
    id: number;
    clientName: string;
    repName: string;
    repId: string;
    avatarColor: string;
    status: string;
    statusEmoji: string;
    statusColor: string;
    statusBg: string;
    time: string;
    lastMsg: string;
    messages: Message[];
}

export interface FAQ {
    question: string;
    answer: string;
}