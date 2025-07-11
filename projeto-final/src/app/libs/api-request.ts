import axios from 'axios';

const avatares = ['Katherine', 'Brooklynn', 'Sara', 'Riley', 'Emery', 'Avery', 'Jessica', 'Ryan', 'Oliver', 'Sarah', 'Liliana', 'Aiden', 'Christian', 'Mackenzie', 'Kimberly', 'Jameson', 'Valentina', 'Chase', 'Amaya', 'Jack'];

export async function buscaAvatar(){

    let url = 'https://api.dicebear.com/9.x/pixel-art/svg?seed=' + avatares[Math.floor(Math.random() * (19 - 0 + 1)) + 0];

    let img = await axios.get(url);
    return img.data;

}