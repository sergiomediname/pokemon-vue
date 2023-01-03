import axios from 'axios';
import { ref } from 'vue';

export const useGetData = () => {
    const data = ref(null);
    const error = ref(false);
    const loading = ref(true);

    const sanitizeData = async (url, pagination) => {
        try {
            const { data } = await axios.get(url);
            const pokemon_data = {
                name: data.name,
                order: data.order.toString().padStart(4, "0"),
                types: data.types,
                main_type: data.types[0].type.name ? data.types[0].type.name : "",
                thumb: data.sprites.other.dream_world.front_default,
                stats: data.stats
            };
            return pokemon_data;
        } catch (error) {
            console.log(error);
        }
    };
    
    const getData = async (url) => {
        loading.value = true;
        try {
            const res = await axios.get(url);
            data.value = res.data;
        } catch (error) {
            console.log(error);
        } finally {
            loading.value = false;
        }
    }

    const getDataPokemon = async (url, pagination = true) => {
        try {
            loading.value = true;
            if(pagination) {
                const res = await axios.get(url);
                const map = pagination ? res.data.results : res.data;
                const promises = map.map(
                    async (pokemon) => await sanitizeData(pokemon.url, pagination)
                );
                const results = await Promise.all(promises);
                data.value = {
                    next: res.data.next,
                    previous: res.data.previous,
                    results: results
                };
            } else {
                const res = await sanitizeData(url, pagination);
                data.value = res;
            }
        } catch (e) {
            error.value = true;
        } finally {
            loading.value = false;
        }
    };

    return {
        data,
        error,
        loading,
        getData,
        getDataPokemon
    };
};
