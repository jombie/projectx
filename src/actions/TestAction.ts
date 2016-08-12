export const LOAD_NAME = "LOAD_NAME";
export function loadName(name: string){
   return {
     type: LOAD_NAME,
     name: name
   }
}
