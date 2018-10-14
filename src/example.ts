import { Md5Module } from '../index';

const Md5 = Md5Module();

export function example1(): void {
    const hash = Md5.md5('hello');
	Logger.log(hash);
}