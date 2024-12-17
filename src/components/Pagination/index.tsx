import { Select, Option } from "../FormElements/Select";
import { Input } from "../FormElements/Input";
import { PagePrev } from "./PagePrev";
import { PageNext } from "./PageNext";
import { PageItem } from "./PageItem";
import { useClassList } from "../utils/useProps";
import { createEffect, createSignal, For, Match, Show, Switch } from "solid-js";

const pages = [
    {value: 10, label: '10条/页'},
    {value: 20, label: '20条/页'},
    {value: 50, label: '50条/页'},
    {value: 100, label: '100条/页'}
];

export interface PaginationProps {
    classList?: any
    class?: any
    shape?: 'normal'|'circle'
    size?: 'small'|'large'
    current: number
    total: number
    pageSize: number
    onChange?: (page: number, pageSize: number) => void
    onChangePageSize?: (pageSize: number) => void
    innerNear?: number
    displayedPages?: number
    startEndShowNum?: number
    showNums?: boolean
    mini?: boolean
    style?: any
    showTotal?: boolean
    showPage?: boolean
    showJumper?: boolean
    pages?: any[]
}

export function Pagination (props: PaginationProps) {
    const classList = () => useClassList(props, 'cm-pagination', {
        [`cm-pagination-${props.shape }`]: props.shape ,
        [`cm-pagination-${props.size}`]: props.size
    });

    const current = () => props.current;
    const total = () => props.total ?? 0;
    const pageSize = () => props.pageSize ?? 10;
    const innerNear = props.innerNear ?? 2;
    const startEndShowNum = props.startEndShowNum ?? 2;
    const showNums = props.showNums ?? true;
    const showTotal = props.showTotal ?? true;
    const ps = props.pages ?? pages;

    const showJumper = props.showJumper ?? true;
    const showPage = props.showPage ?? true;

    const [pageNum, setPageNum] = createSignal(current());

    createEffect(() => {
        if (current() != pageNum()) {
            setPageNum(current());
        }
    });

    const prev = () => {
        if (current() > 1) {
            _handleChange(current() - 1);
        }
    };

    const next = () => {
        if (current() < _calcPage()) {
            _handleChange(current() + 1);
        }
    };

    const gotoPage = (v: string) => {
        _handleChange(parseInt(v, 10));
    }

    const _calcPage = () => {
        // 没数据的时候默认为第一页
        if (total() === 0) {
            return 1;
        }
        return Math.floor((total() - 1) / pageSize()) + 1;
    };

    const _isValid = (page: number) => {
        return typeof page === 'number' && page >= 1;
    }

    /**
     * 页号改变
     * @method _handleChange
     * @param p 当前页号
     * @returns {*}
     * @private
     */
    const _handleChange = (p: number) => {
        let page = p;
        if (_isValid(page) && page !== current()) {
            if (page > _calcPage()) {
                page = _calcPage();
            }

            setPageNum(page);
            if (props.onChange) {
                props.onChange(page, pageSize());
            }
        }
    }

    const onChangePageSize = (size: number) => {
        const totalPages = Math.floor((total() - 1) / size) + 1;
        props.onChangePageSize && props.onChangePageSize(size);
        if (current() > totalPages) {
            setPageNum(1);
            if (props.onChange) {
                props.onChange(1, pageSize());
            }
        }
    }

    /**
     * 获取中间显示的页号
     * @method _getInner
     * @returns {{start: number, end: number}}
     * @private
     */
    function _getInner () {
        const pages = _calcPage();
        const start = current() > startEndShowNum + innerNear + 1 ? current() - innerNear : startEndShowNum + 1;
        const end = current() + innerNear + startEndShowNum >= pages ? pages - startEndShowNum : current() + innerNear;
        return {start, end};
    }

    function rednderItems () {
        if (!showNums) {
            return null;
        }
        const pages = _calcPage();
        const pagerList = [];
        const interval = _getInner();

        const cur = current();
        for (let i = 1; i <= startEndShowNum; i++) {
            const active = cur === i;
            pagerList.push(<PageItem active={active} onClick={_handleChange.bind(null, i)} currentIndex={i} />);
        }

        if (cur > startEndShowNum + innerNear + 1){
            pagerList.push(<li class="cm-pagination-num cm-pagination-ellipse"><span class="ellipse">•••</span></li>);
        }
        let start = interval.start;
        const end = interval.end;

        for (;start <= end; start++) {
            const active = cur === start;
            pagerList.push(<PageItem onClick={_handleChange.bind(null, start)} currentIndex={start} active={active} />);
        }

        if (cur + innerNear + startEndShowNum < pages){
            pagerList.push(<li class="cm-pagination-num cm-pagination-ellipse"><span class="ellipse">•••</span></li>);
        }

        for (let i = pages - startEndShowNum + 1; i <= pages; i++) {
            const active = cur === i;
            pagerList.push(<PageItem active={active} onClick={_handleChange.bind(null, i)} currentIndex={i} />);
        }
        return pagerList;
    }

    return <div classList={classList()} style={props.style}>
        <Switch>
            <Match when={props.mini}>
                <ul class="cm-pagination-num-list">
                    <PagePrev current={current} onClick={prev} />
                        <Input style={{ width: props.size === 'small' ? '35px' : '50px' }} class="mr-5"
                            value={[pageNum, setPageNum]} size={props.size} onChange={gotoPage} />
                        <span class="cm-pagination-mini-pages">/ {_calcPage()}</span>
                    <PageNext current={current} onClick={next} disabled={current() === _calcPage()} />
                </ul>
            </Match>
            <Match when={!props.mini}>
                <Show when={showTotal}>
                    <span class="cm-pagination-text mr-5">共{total()}条</span>
                </Show>
                <ul class="cm-pagination-num-list">
                    <PagePrev current={current} onClick={prev} />
                    {rednderItems()}
                    <PageNext current={current} onClick={next} disabled={current() === _calcPage()} />
                </ul>
                <Show when={showPage}>
                    <span class="cm-pagination-sizer">
                        <Select value={pageSize()} size={props.size} onChange={onChangePageSize}
                            data={ps}>
                            <For each={pages}>
                                {(item: any) => {
                                    return <Option label={item.label} value={item.value} />
                                }}
                            </For>
                        </Select>
                    </span>
                </Show>
                <Show when={showJumper}>
                    <span class="cm-pagination-jumper">
                        <span class="cm-pagination-text">跳至</span>
                        <Input style={{ width: props.size === 'small' ? '35px' : '50px' }} class="mr-5"
                            value={[pageNum, setPageNum]} size={props.size} onChange={gotoPage} />
                        <span class="cm-pagination-text">页</span>
                    </span>
                </Show>
            </Match>
        </Switch>
    </div>
}

export default Pagination;
