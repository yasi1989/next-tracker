export type FormValues = {
    description: string;
    date: Date;
    amount: string;
    transactionType: "expense" | "income";
};