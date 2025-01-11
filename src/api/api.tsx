import axios from "axios";
import CardData from "../models/CardData";

export const api = axios.create({
    baseURL: "https://fake-api-aluraflix-theta.vercel.app"
    // baseURL: "http://localhost:3000"
});

// Get cards
export const getCards = async() => {
    try {
        const response = await api.get("/card");
        return response.data;
    } catch (error) {
        console.log("Error fetching cards", error);
    }
};

// Get categories
export const getCategories = async() => {
    try {
        const response = await api.get("/category");
        return response.data;
    } catch (error) {
        console.error("Error fetching categories", error);
    }
};

// Post card
export const postCard = async(data: CardData) => {
    try {
        const response = await api.post("/card", data);
        console.log('Card created successfully', response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating card', error);
    }
};

// Put card
export const putCard = async(id: string, data:CardData) => {
    try {
        const response = await api.put(`/card/${id}`, data);
        console.log('Card updated successfully', response.data);
        return response.data
    } catch (error) {
        console.error('Error updating card', error);
    }
};

// Delete card
export const deleteCard = async(id: string) => {
    try {
        const response = await api.delete(`/card/${id}`);
        console.log('Card deleted successfully', response.data);
        return response.data;
    } catch (error) {
        console.error('Error deleting card', error);
    }
};