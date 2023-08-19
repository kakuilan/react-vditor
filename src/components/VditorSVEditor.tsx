import React, {FC, createRef, useEffect} from "react"
import Vditor from "vditor"

import {defaultSVOptions} from "../types/options"
import {importDefaultTheme} from "../utils"
import {IVditorEditorProps} from "./Vditor"

export interface IVditorSVEditorProps extends IVditorEditorProps {
}

const VditorSVEditor: FC<IVditorSVEditorProps> = ({
                                                      keyID,
                                                      zindex,
                                                      options,
                                                      bindVditor,
                                                  }) => {
    const vditorRef = createRef<HTMLDivElement>()
    let zidx = !!zindex ? zindex : 99;

    useEffect(() => {
        // initial Vditor
        const id = `vditor-editor-sv-${keyID}`
        let opts = !!options ? options : defaultSVOptions
        const vditor = new Vditor(id, opts)
        if (!!bindVditor) {
            bindVditor(vditor)
        }
        importDefaultTheme(opts)
    }, [])

    return <div id={`vditor-editor-sv-${keyID}`} style={{zIndex: zidx}} ref={vditorRef}></div>
}

export default VditorSVEditor
