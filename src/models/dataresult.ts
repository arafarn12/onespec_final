export interface dataResult {
    id: number;
    name: string;
    price: number;
    image: string;
}

export interface saveandload {
    specname: string;
    cpu: string,
    mainboard: string,
    vga: string,
    memory: string,
    hdd: string,
    ssd: string,
    psu: string,
    case: string,
    cpu_cooler: string,
    monitor: string,
    cpu_name: string;
    cpu_price: number;
    cpu_img: string;
    mainboard_name: string;
    mainboard_price: number;
    mainboard_img: string;
    vga_name: string;
    vga_price: number;
    vga_img: string;
    memory_name: string;
    memory_price: number;
    memory_img: string;
    hdd_name: string;
    hdd_price: number;
    hdd_img: string;
    ssd_name: string;
    ssd_price: number;
    ssd_img: string;
    psu_name: string;
    psu_price: number;
    psu_img: string;
    case_name: string;
    case_price: number;
    case_img: string;
    cpu_cooler_name: string;
    cpu_cooler_price: number;
    cpu_cooler_img: string;
    monitor_name: string;
    monitor_price: number;
    monitor_img: string;
}

export interface IlistFile {
    isFile: boolean;
    isDirectory: boolean;
    name: string;
    fullPath: string;
    filesystem: string;
    nativeURL: string;
}
