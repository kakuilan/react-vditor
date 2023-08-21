import React, {FC, createRef, useEffect} from "react"
import Vditor from "vditor"

import {defaultIROptions, defaultOptions} from "../types/options"
import {importDefaultTheme} from "../utils"
import {IVditorEditorProps} from "./Vditor"

export interface IVditorIREditorProps extends IVditorEditorProps {
}

const VditorIREditor: FC<IVditorIREditorProps> = ({
                                                      keyID,
                                                      zindex,
                                                      options,
                                                      bindVditor,
                                                  }) => {
    const vditorRef = createRef<HTMLDivElement>()
    let zidx = !!zindex ? zindex : 99;

    useEffect(() => {
        // initial Vditor
        const id = `vditor-editor-ir-${keyID}`
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

    return <div id={`vditor-editor-ir-${keyID}`} style={{zIndex: zidx}} ref={vditorRef}></div>
}

export default VditorIREditor
