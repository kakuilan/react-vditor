import React, {FC, createRef, useEffect} from "react"
import Vditor from "vditor"

import {defaultOptions, defaultWYSIWYGOptions} from "../types/options"
import {importDefaultTheme} from "../utils"
import {IVditorEditorProps} from "./Vditor"

export interface IVditorWYSIWYGEditorProps extends IVditorEditorProps {
}

const VditorWYSIWYGEditor: FC<IVditorWYSIWYGEditorProps> = ({
                                                                keyID,
                                                                zindex,
                                                                options,
                                                                bindVditor,
                                                            }) => {
    const vditorRef = createRef<HTMLDivElement>()
    let zidx = !!zindex ? zindex : 99;

    useEffect(() => {
        // initial Vditor
        const id = `vditor-editor-wysiwyg-${keyID}`
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

    return <div id={`vditor-editor-wysiwyg-${keyID}`} style={{zIndex: zidx}} ref={vditorRef}></div>
}

export default VditorWYSIWYGEditor
