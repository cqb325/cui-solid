import type { GutterProps } from "../Row";
export declare type responsiveType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
/**
 * 创建响应式样式,返回class
 * @param width
 * @param responsive
 * @returns
 */
export declare function createGrid(width?: number, responsive?: responsiveType): string;
export declare function createOffset(offset: number, responsive: responsiveType): string;
export declare function createGutter(gutter: number | number[] | GutterProps): any;
