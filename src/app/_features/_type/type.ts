export type FormValues = {
    id: string;
    description: string;
    date: Date;
    amount: number;
    transactionType: "expense" | "income";
};