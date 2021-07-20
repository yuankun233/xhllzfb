export declare function getWXComponent(cfg: any): {
    methods: any;
    deriveDataFromProps: (this: any, nextProps: any) => void;
    data: any;
    onInit: (this: any) => void;
    didMount: (this: any) => void;
    didUpdate: (this: any, prevProps: any, prevData: any) => void;
    didUnmount: (this: any) => void;
};
declare function WXComponent(config: any): void;
export default WXComponent;
