import HttpContract from '@/service/contract/Http';

export default class Authors {
    private url: string = '/v2/authors';
    private http: any;

    constructor(http: HttpContract) {
        this.http = http;
    }

    public getCollection(): Promise<{[key: string]: any}> {
        return this.http.get(this.url)
    };

    public getById(id: number): Promise<{[key: string]: any}> {
        return this.http.get(`${this.url}/${id}`)
    };
}