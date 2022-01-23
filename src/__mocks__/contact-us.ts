import IContactUsData from "../types/IContactUsData";

export const sendMessage = jest.fn().mockResolvedValue( 
   Promise.resolve({ data: {'success' : true} })
);

// export const useFooContext = jest.fn(() => {}); sendMessage;