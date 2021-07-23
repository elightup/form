import { Dashicon, Tooltip as T } from "@wordpress/components";

export const Tooltip = ( { content } ) => (
	<T text={ content }>
		<span className="ef-control__tooltip"><Dashicon icon="editor-help" /></span>
	</T>
);