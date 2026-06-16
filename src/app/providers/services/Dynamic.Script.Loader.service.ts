import { Injectable } from '@angular/core';

interface Scripts {
    name: number;
    src: string;
}

export const ScriptStore: Scripts[] = [
    { name: 1 , src: 'assets/js/tamil.js'},
    { name: 6, src: 'assets/js/hindi.js'},
    { name: 7, src: 'assets/js/kannada.js'},
    { name: 8, src: 'assets/js/malayalam.js'},
    { name: 20, src: 'assets/js/oriya.js'},
    { name: 11, src: 'assets/js/telugu.js'},
    { name: 12, src: 'assets/js/english.js'},
    { name: 16, src: 'assets/js/common.js'},
    { name: 13, src: 'assets/js/oriya.js'},
];

declare var document: any;

@Injectable()
export class DynamicScriptLoaderService {

    private scripts: any = {};

    constructor() {
        ScriptStore.forEach((script: any) => {
            this.scripts[script.name] = {
                loaded: false,
                src: script.src
            };
        });
    }

    load(...scripts: string[]) {
        const promises: any[] = [];
        scripts.forEach((script) => promises.push(this.loadScript(script)));
        return Promise.all(promises);
    }

    loadScript(name: any) {
        return new Promise((resolve, reject) => {
            // load script
            const script = document.createElement('script');

            script.type = 'text/javascript';

            script.src = this.scripts[name].src;

            if (script.readyState) {  // IE
                script.onreadystatechange = () => {
                    if (script.readyState === 'loaded' || script.readyState === 'complete') {
                        script.onreadystatechange = null;
                        this.scripts[name].loaded = true;
                        resolve({script: name, loaded: true, status: 'Loaded'});
                    }
                };
            } else {  // Others
                script.onload = () => {
                    this.scripts[name].loaded = true;
                    resolve({script: name, loaded: true, status: 'Loaded'});
                };
            }
            script.onerror = (error: any) => resolve({script: name, loaded: false, status: 'Loaded'});
            document.getElementsByTagName('head')[0].appendChild(script);
        });
    }

}
