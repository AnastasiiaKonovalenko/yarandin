const _apiBase = 'https://swapi.co/api';

export class getData {
     async getResource(URL) {
        const res = await fetch(`${_apiBase}${URL}`);
        if(!res.ok) {
            throw new Error('Could not fetch')
        }

        return await res.json()
    }

    getAllFilms(URL) {
        return this.getResource(URL)
    }
}



