import { Select, Option } from "../FormElements/Select";
import { InnerInput } from "../FormElements/Input/input";
import { PagePrev } from "./PagePrev";
import { PageNext } from "./PageNext";
import { PageItem } from "./PageItem";
import { useClassList } from "../utils/useProps";
import { createEffect, createSignal, For, Show } from "solid-js";

const pages = [
    {value: 10, label: '10条/页'},
    {value: 20, label: '20条/页'},
    {value: 50, label: '50条/页'},
    {value: 100, label: '100条/页'}
];

type PaginationProps = {
    classList?: any,
    class?: any,
    shape?: 'normal'|'circle',
    size?: 'small'|'large',
    current: number,
    total: number,
    pageSize: number,
    onChange?: Function,
    onChangePageSize?: Function,
    displayedPages?: number,
    showNums?: boolean,
    style?: any,
    showTotal?: boolean,
    showPage?: boolean,
    showJumper?: boolean,
    pages?: any[]
}

export function Pagination(props: PaginationProps) {
    const classList = () => useClassList(props, 'cm-pagination', {
        [`cm-pagination-${props.shape }`]: props.shape ,
        [`cm-pagination-${props.size}`]: props.size
    });

    const current = () => props.current;
    const total = () => props.total ?? 0;
    const pageSize = () => props.pageSize ?? 10;
    const displayedPages = props.displayedPages ?? 5;
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
                props.onChange(page, pageSize);
            }
        }
    }

    const onChangePageSize = (size: number) => {
        const totalPages = Math.floor((total() - 1) / size) + 1;
        props.onChangePageSize && props.onChangePageSize(size);
        if (current() > totalPages) {
            setPageNum(1);
            if (props.onChange) {
                props.onChange(1, pageSize);
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
        const half = displayedPages / 2;
        return {
            start: Math.ceil(current() > half
                ? Math.max(Math.min(current() - half, (pages - displayedPages)), 0)
                : 0),
            end: Math.ceil(current() > half ? Math.min(current() + half, pages) : Math.min(half, pages))
        };
    }

    function rednderItems () {
        if (!showNums) {
            return null;
        }
        const pages = _calcPage();
        const pagerList = [];
        const interval = _getInner();
        if (pages <= 9) {
            for (let i = 0; i < pages; i++) {
                const active = current() === i + 1;
                pagerList.push((<PageItem key={i + 1} onClick={_handleChange.bind(null, i + 1)}
                    active={active} currentIndex={i + 1} />));
            }
        } else {
            const edges = 2;
            const end = Math.min(edges, interval.start);
            for (let i = 0; i < end; i++) {
                pagerList.push(<PageItem key={i + 1} onClick={_handleChange.bind(null, i + 1)}
                    currentIndex={i + 1} />);
            }
            if (edges < interval.start && (interval.start - edges !== 1)) {
                pagerList.push(<li class='cm-pagination-num cm-pagination-ellipse'><span class='ellipse'>•••</span></li>);
            } else if (interval.start - edges === 1) {
                pagerList.push(<PageItem key={edges + 1} onClick={_handleChange.bind(null, edges + 1)}
                    currentIndex={edges + 1} />);
            }

            for (let j = interval.start; j < interval.end; j++) {
                const active = current() === j + 1;
                pagerList.push(<PageItem key={j + 1} onClick={_handleChange.bind(null, j + 1)}
                    currentIndex={j + 1} active={active} />);
            }

            if (interval.end < pages && edges > 0) {
                if (pages - edges > interval.end && (pages - edges - interval.end !== 1)) {
                    pagerList.push(<li class='cm-pagination-num cm-pagination-ellipse'><span class='ellipse'>•••</span></li>);
                } else if (pages - edges - interval.end === 1) {
                    pagerList.push(<PageItem key={interval.end + 1}
                        onClick={_handleChange.bind(null, interval.end + 1)}
                        currentIndex={interval.end + 1} />);
                }
                const begin = Math.max(pages - edges, interval.end);
                for (let k = begin; k < pages; k++) {
                    pagerList.push(<PageItem key={k + 1} onClick={_handleChange.bind(null, k + 1)}
                        currentIndex={k + 1} />);
                }
            }
        }
        return pagerList;
    }

    return <div classList={classList()} style={props.style}>
        <Show when={showTotal}>
            <span class='cm-pagination-text mr-5'>共{total()}条</span>
        </Show>
        <ul class='cm-pagination-num-list'>
            <PagePrev current={current} onClick={prev} />
            {rednderItems()}
            <PageNext current={current} onClick={next} disabled={current() === _calcPage()} />
        </ul>
        <Show when={showPage}>
            <span class='cm-pagination-sizer'>
                <Select value={pageSize()} size={props.size} onChange={onChangePageSize}
                    data={ps} style={{width: '80px'}}>
                    <For each={pages}>
                        {(item: any) => {
                            return <Option label={item.label} value={item.value}></Option>
                        }}
                    </For>
                </Select>
            </span>
        </Show>
        <Show when={showJumper}>
            <span class='cm-pagination-jumper'>
                <span class='cm-pagination-text'>跳至</span>
                <InnerInput style={{ width: props.size === 'small' ? '30px' : '50px' }} class='mr-5'
                    value={[pageNum, setPageNum]} size={props.size} onChange={gotoPage} />
                <span class='cm-pagination-text'>页</span>
            </span>
        </Show>
    </div>
}

export default Pagination;