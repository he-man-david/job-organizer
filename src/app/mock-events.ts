import { Event } from "./event";

export const Events: Event[] = [
    {
        id: 1, date: "10/1/2019", time: "9:45am", company: "Microsoft", 
        info: {
            role: "Microservice Developer",
            reminder: "Interviewer name is Tom, and he likes cats."
        }
    },
    {
        id: 2, date: "10/3/2019", time: "11:45am", company: "Google", 
        info: {
            role: "Android Developer",
            reminder: "Dress casual, wear jeans. Say 'Whats popping?'..."
        }
    },
    {
        id: 3, date: "10/3/2019", time: "10:45am", company: "Alibaba", 
        info: {
            role: "Backend Java Developer",
            reminder: "Wear a suit, and say ni hao to Jack Ma."
        }
    },
    {
        id: 4, date: "10/9/2019", time: "2:45pm", company: "JPMorgan", 
        info: {
            role: "Java/Python Developer",
            reminder: "Wear a black suit, and black tie, and look very depressing."
        }
    },
    {
        id: 5, date: "10/12/2019", time: "4:45pm", company: "Apple", 
        info: {
            role: "Microservice Developer",
            reminder: "Wear a black turtle neck, and shave my head."
        }
    },
    {
        id: 6, date: "10/15/2019", time: "1:45pm", company: "Facebook", 
        info: {
            role: "Machine Learning Developer",
            reminder: "Try to smell like coconut and old gym shorts."
        }
    }
]