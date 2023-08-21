import React, {FC, createRef, useEffect} from "react"
import Vditor from "vditor"

import {IOptions, defaultOptions} from "../types/options"
import {importDefaultTheme} from "../utils"

export interface IVditorEditorProps {
    keyID: string;
    zindex?: number;
    options?: IOptions;

    bindVditor?(vditor: Vditor): void;
}

const VditorEditor: FC<IVditorEditorProps> = ({
                                                  keyID,
                                                  zindex,
                                                  options,
                                                  bindVditor,
                                              }) => {

    const vditorRef = createRef<HTMLDivElement>()
    let zidx = !!zindex ? zindex : 99;

    useEffect(() => {
        // initial Vditor
        const id = `vditor-editor-${keyID}`
        //let opts = !!options ? options : defaultOptions;
        let opts = {
            ...defaultOptions,
            ...options,
        };
        const vditor = new Vditor(id, opts)
        if (!!bindVditor) {
            bindVditor(vditor)
        }
        importDefaultTheme(opts)
    }, [])

    return <div id={`vditor-editor-${keyID}`} style={{zIndex: zidx}} ref={vditorRef}></div>
}

export default VditorEditor
