import HttpHelper from './HttpHelper';

class CompilerApi {
    static requestheaders() {
        return { 'Content-Type': 'application/json' };
    }

    static getTask(lang) {
        return HttpHelper.fetch(`${process.env.API_URL}/api/fime/${lang}`, 'GET',
        this.requestheaders(), null);
    }

    static run(answer) {
        return HttpHelper.fetch(`${process.env.API_URL}/api/run`, 'POST',
        this.requestheaders(), JSON.stringify(answer),);
    }
}

export default CompilerApi;