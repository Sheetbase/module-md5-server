var proccess = proccess || this;

declare const Md5Module: {()};
const Md5 = proccess['Md5'] || Md5Module();

export function example1(): void {
    const hash = Md5.md5('hello');
	Logger.log(hash);
}