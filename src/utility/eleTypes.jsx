import { TableOutlined, CodeSandboxOutlined, BorderOutlined, FontColorsOutlined, LinkOutlined, MenuUnfoldOutlined, PlusSquareOutlined, InsertRowBelowOutlined, FormOutlined, LineChartOutlined } from "@ant-design/icons";
import FlexWrapOptions, { AlignItems,BoxSizingOptions, ClearOptions, CursorOptions, DisplayOptions, FlexBasisOptions, FlexDirection,FlexFlowOptions,FlexGrowOptions,FlexShrinkOptions,FloatOptions,GridTemplateColumnsOptions,JustifyContent,MobileDisplayOptions,OverflowOptions,PositionOptions, TransformOptions, VisibilityOptions, ZIndexOptions } from "../components/PositionAndDisplay/PositionAndDisplayOptions";
import { BorderRadiusOptions, BoxShadowOptions } from "../components/BorderStyleOptions/BorderStyleOptions";
import FontsFamily, { FontStyle, FontWeight,LineHeight,TextAlign,FontsSize, WordBreakOptions, LetterSpacing, WordBreak, WhiteSpace, WordSpacing, WordWrap, TextOverflow } from "../components/Fonts/FontsOptions";
import BackgroundRepeatOptions, { BackgroundAttachmentOptions, BackgroundPositionOptions, BackgroundSizenOptions } from "../components/BackgroundsOptions/BackgroundsOptions";
import ImageRenderingOptions, { ImageOrientationOptions, ObjectFitOptions, ObjectPositionOptions, OpacityOptions } from "../components/ImageOptions/ImageOptions";
import { AlignItemsDes, BackgroundAttachment, BackgroundColor, BackgroundImage, BackgroundPosition, BackgroundRepeat, BackgroundSize, BorderBottomDes, BorderDes, BorderLeftDes, BorderRadiusDes, BorderRightDes, BorderTopDes, BottomDes, BoxShadowDes, BoxSizingDes, ClearDes, CursorDes, DisplayDes, FlexBasisDes, FlexDirectionDes, FlexFlowDes, FlexGrowDes, FlexShrinkDes, FlexWrapDes, FloatDes, FontColor, FontFamily, FontSize, FontStyleDes, FontWeightDes, GapDes, GridTemplateColumnsDes, Height, JustifyContentDes, LeftDes, LetterSpacingDes, LineHeightDes, MarginBottomDes, MarginDes, MarginLeftDes, MarginRightDes, MarginTopDes, MaximumHeight, MaximumWidth, MinimumHeight, MinimumWidth, ObjectFitDes, ObjectPositionDes, OpacityDes, OverflowDes, overflowXDes, overflowYDes, PaddingBottomDes, PaddingDes, PaddingLeftDes, PaddingRightDes, PaddingTopDes, PositionDes, RightDes, TextAlignDes, TextOverflowDes, TopDes, TransformDes, VisibilityDes, WhiteSpaceDes, Width, WordBreakDes, WordSpacingDes, WordWrapDes, ZIndexDes} from "../components/DescriptionProperties/DescriptionProperties";
import InnerSvg from "../components/PropertiesSvg/InnerSvg";
import DisplaySvg from "../components/PropertiesSvg/DisplaySvg";
import BorderSvg from "../components/PropertiesSvg/BorderSvg";
import SizeSvg from "../components/PropertiesSvg/SizeSvg";
import FontSvg from "../components/PropertiesSvg/FontSvg";
import PositionSvg from "../components/PropertiesSvg/PositionSvg";
import PaddingSvg from "../components/PropertiesSvg/PaddingSvg";
import MarginSvg from "../components/PropertiesSvg/MarginSvg";
import TransformSvg from "../components/PropertiesSvg/TransformSvg";
import BoxShadowSvg from "../components/PropertiesSvg/BoxShadowSvg";
import OptionsSvg from "../components/PropertiesSvg/OptionsSvg";
import ContainerSvg from "../components/RootElementSvg/ContainerSvg";
import BoxSvg from "../components/RootElementSvg/BoxSvg";
import ButtonSvg from "../components/RootElementSvg/ButtonSvg";
import TextSvg from "../components/RootElementSvg/TextSvg";
import LinkSvg from "../components/RootElementSvg/LinkSvg";
import ImageSvg from "../components/RootElementSvg/ImageSvg";
import DropDownSvg from "../components/RootElementSvg/DropDownSvg";
import ModalFormSvg from "../components/RootElementSvg/ModalFormSvg";
import ModalWizardSvg from "../components/RootElementSvg/ModalWizardSvg";
import LoginFormSvg from "../components/RootElementSvg/LoginFormSvg";
import DevComponentSvg from "../components/RootElementSvg/DevComponentSvg";
import CategoryListItemSvg from "../components/RootElementSvg/CategoryListItemSvg";
import ItemListDetils from "../components/RootElementSvg/ItemListDetils";
import TableSvg from "../components/RootElementSvg/TableSvg";
import DataDisplaySvg from "../components/RootElementSvg/DataDisplaySvg";
import ImageDescriptionSvg from "../components/RootElementSvg/ImageDescriptionSvg";
import ProfileFormSvg from "../components/RootElementSvg/ProfileFormSvg";
import ItemDetailsSvg from "../components/RootElementSvg/ItemDetailsSvg";
import ReportDetils from "../components/RootElementSvg/Report";
import BannerSlider from "../components/RootElementSvg/BannerSlider";
import AutoSlider from "../components/RootElementSvg/AutoSlider";
import AppointmentCalendar from "../components/RootElementSvg/AppointmentCalendar";


const properties = [
  {name: <DisplaySvg/>, value_type: "rel", value: "", children:[
    { name: 'display',label:DisplayDes, value_type: 'List_Option', value: '', options: DisplayOptions() , mobileOptions: MobileDisplayOptions()},           
    { name: 'flexDirection', label: FlexDirectionDes, value_type: 'List_Option', value: '', options: FlexDirection() },
    { name: 'justifyContent', label: JustifyContentDes, value_type: 'List_Option', value: '', options: JustifyContent() },
    { name: 'alignItems', label: AlignItemsDes, value_type: 'List_Option', value: '', options: AlignItems() },
    { name: 'gap', label: GapDes, value_type: 'number', value: '' },
    { name: 'flexWrap', label: FlexWrapDes, value_type: 'List_Option', value: '', options: FlexWrapOptions() },
    { name: 'flexGrow', label: FlexGrowDes, value_type: 'number', value: '' },
    // { name: 'flexBasis', label: FlexBasisDes, value_type: 'List_Option', value: '', options: FlexBasisOptions() },
    // { name: 'flexFlow', label: FlexFlowDes, value_type: 'List_Option', value: '', options: FlexFlowOptions() },
    { name: 'flexShrink', label: FlexShrinkDes, value_type: 'List_Option', value: '', options: FlexShrinkOptions() },
    { name: 'cursor', label: CursorDes, value_type: 'List_Option', value: '', options: CursorOptions() , noMobile: true},
    // { name: 'float', label: FloatDes, value_type: 'List_Option', value: '', options: FloatOptions() },
    // { name: 'clear', label: ClearDes, value_type: 'List_Option', value: '', options: ClearOptions() },
    { name: 'overflow', label: OverflowDes, value_type: 'List_Option', value: '', options: OverflowOptions() },
    { name: 'overflowX', label: overflowXDes, value_type: 'List_Option', value: '', options: OverflowOptions() },
    { name: 'overflowY', label: overflowYDes, value_type: 'List_Option', value: '', options: OverflowOptions() },
    { name: 'visibility', label: VisibilityDes, value_type: 'List_Option', value: '', options: VisibilityOptions() },
    { name: 'zIndex', label: ZIndexDes, value_type: 'List_Option', value: '', options: ZIndexOptions() },
    { name: 'boxSizing', label: BoxSizingDes, value_type: 'List_Option', value: '', options: BoxSizingOptions() , noMobile: true },
    { name: 'gridTemplateColumns', label: GridTemplateColumnsDes, value_type: 'List_Option', value: '', options: GridTemplateColumnsOptions(), noMobile: true },
  ]},
  {name: <BorderSvg/>, value_type: "rel", value: "", children:[
    {name: 'border', label: BorderDes, value_type: 'string', value: ''},
    {name: 'borderTop', label: BorderTopDes, value_type: 'string', value: ''},
    {name: 'borderBottom', label: BorderBottomDes, value_type: 'string', value: ''},
    {name: 'borderRight', label: BorderRightDes, value_type: 'string', value: ''},
    {name: 'borderLeft', label: BorderLeftDes, value_type: 'string', value: ''},
    {name: 'borderRadius', label: BorderRadiusDes, value_type: 'List_Option', value: '', options: BorderRadiusOptions()},
  ]},
  {name: <PaddingSvg/>, value_type: "rel", value: "", children:[
    {name: 'padding', label: PaddingDes, value_type: 'string', value: ''},
    {name: 'paddingTop', label: PaddingTopDes, value_type: 'string', value: ''},
    {name: 'paddingBottom', label: PaddingBottomDes, value_type: 'string', value: ''},
    {name: 'paddingRight', label: PaddingRightDes, value_type: 'string', value: ''},
    {name: 'paddingLeft', label: PaddingLeftDes, value_type: 'string', value: ''},
  ]},
  {name: <MarginSvg/>, value_type: 'rel', value: '' , children:[
    {name: 'margin', label: MarginDes, value_type: 'string', value: ''},
    {name: 'marginTop', label: MarginTopDes, value_type: 'string', value: ''},
    {name: 'marginBottom', label: MarginBottomDes, value_type: 'string', value: ''},
    {name: 'marginRight', label: MarginRightDes, value_type: 'string', value: ''},
    {name: 'marginLeft', label: MarginLeftDes, value_type: 'string', value: ''},
    {name: 'marginInlineStart', label: "Margin Inline Start", value_type: 'string', value: ''},
    {name: 'marginBlockStart', label: 'Margin Block Start', value_type: 'string', value: ''}
  ]},
  {name: <InnerSvg/>, value_type: "rel", value: "", children:[
    {name: 'backgroundColor',label: BackgroundColor ,value_type: 'List_Option_And_Color_Picker', options: [
      {name: 'Dark Color' , value: 'var(--dark_color)'},
      {name: 'Light Color' , value: 'var(--light_color)'},
      {name: 'Dark Background Color' , value: 'var(--dark_bg_color)'},
      {name: 'Light Background Color' , value: 'var(--light_bg_color)'},
    ]},
    {name: 'backgroundImage', label: BackgroundImage, value_type: 'stringUrl', value: "", placeholder: "url('Your Url')" , noMobile: true},
    {name: 'backgroundRepeat', label: BackgroundRepeat, value_type: 'List_Option', value: '', options: BackgroundRepeatOptions() , noMobile: true},
    {name: 'backgroundPosition', label: BackgroundPosition, value_type: 'List_Option', value: '', options: BackgroundPositionOptions(), noMobile: true},
    {name: 'backgroundAttachment', label: BackgroundAttachment, value_type: 'List_Option', value: '', options: BackgroundAttachmentOptions(), noMobile: true},
    {name: 'backgroundSize', label: BackgroundSize, value_type: 'List_Option', value: '', options: BackgroundSizenOptions(), noMobile: true},
    ]},
    {name: <SizeSvg/>, value_type: "rel", value: "", children:[
      { name: 'width', label: Width, value_type: 'number&string', value: '' },
      { name: 'height', label: Height, value_type: 'number&string', value: '' },
      { name: 'maxWidth', label: MaximumWidth, value_type: 'number&string', value: '' },
      { name: 'minWidth', label: MinimumWidth, value_type: 'number&string', value: '' },
      { name: 'maxHeight', label: MaximumHeight, value_type: 'number&string', value: '' },
      { name: 'minHeight', label: MinimumHeight, value_type: 'number&string', value: '' },
    ]},
    {name: <FontSvg/>, value_type: "rel", value: "", children:[
    {name: 'color', label: FontColor , value_type: 'List_Option_And_Color_Picker', options: [
      {name: 'Dark Font' , value: 'var(--font_dark)' , mobileValue: 'dark'},
      {name: 'Light Font' , value: 'var(--font_light)' , mobileValue: 'light'},
    ]},
    { name: 'fontFamily', label: FontFamily, value_type: 'List_Option', value: '', options: FontsFamily(), noMobile: true },
    { name: 'fontSize', label: FontSize, value_type: 'List_Option', value: '', options: FontsSize() },
    { name: 'fontWeight', label:FontWeightDes , value_type: 'List_Option', value: '', options: FontWeight() },
    { name: 'lineHeight', label: LineHeightDes, value_type: 'List_Option', value: '', options: LineHeight() },
    { name: 'textAlign', label: TextAlignDes, value_type: 'List_Option', value: '', options: TextAlign() },
    { name: 'fontStyle', label: FontStyleDes, value_type: 'List_Option', value: '', options: FontStyle(), noMobile: true },
    { name: 'letterSpacing', label: LetterSpacingDes, value_type: 'List_Option', value: '', options: LetterSpacing() },
    { name: 'wordBreak', label: WordBreakDes, value_type: 'List_Option', value: '', options: WordBreak() },
    { name: 'whiteSpace', label: WhiteSpaceDes, value_type: 'List_Option', value: '', options: WhiteSpace() },
    { name: 'wordSpacing', label: WordSpacingDes, value_type: 'List_Option', value: '', options: WordSpacing() },
    { name: 'wordWrap', label: WordWrapDes, value_type: 'List_Option', value: '', options: WordWrap() },
    { name: 'textOverflow', label: TextOverflowDes, value_type: 'List_Option', value: '', options: TextOverflow(), noMobile: true },
  ]},
  {name: <PositionSvg/>, value_type: "rel", value: "", children:[
    { name: 'position', label: PositionDes, value_type: 'List_Option', value: '', options: PositionOptions() },
    { name: 'top', label: TopDes, value_type: 'number&string', value: '' },
    { name: 'right', label: RightDes, value_type: 'number&string', value: '' },
    { name: 'bottom', label: BottomDes, value_type: 'number&string', value: '' },
    { name: 'left', label: LeftDes, value_type: 'number&string', value: '' },
  ]},
  {name: <TransformSvg/>, value_type: "rel", value: "", children:[
    { name: 'transform', label: TransformDes, value_type: 'string', value: '', options: TransformOptions(), noMobile: true },
  ]},
  {name: <BoxShadowSvg/>, value_type: "rel", value: "", children:[
    {name: 'boxShadow', label: BoxShadowDes, value_type: 'List_Option', value: '', options: BoxShadowOptions(), noMobile: true},
  ]},
]

export const types = [
  { name: "", type: "container", icon: <ContainerSvg/> , properties},

  {name: "", type: "box", icon: <BoxSvg/> , properties},
  
  { name: "Page Body", type: "page_body", icon: <TableOutlined /> , properties},

  { name: "", type: "button", icon: <ButtonSvg/> , properties: [
    {name: <SizeSvg/>, value_type: "rel", value: "", children:[
      { name: 'width', label: Width, value_type: 'number&string', value: '' },
      { name: 'height', label: Height, value_type: 'number&string', value: '' },
      { name: 'maxWidth', label: MaximumWidth, value_type: 'number&string', value: '' },
      { name: 'minWidth', label: MinimumWidth, value_type: 'number&string', value: '' },
      { name: 'maxHeight', label: MaximumHeight, value_type: 'number&string', value: '' },
      { name: 'minHeight', label: MinimumHeight, value_type: 'number&string', value: '' },
      ]},
      {name: <MarginSvg/>, value_type: 'rel', value: '' , children:[
        {name: 'margin', label: MarginDes, value_type: 'string', value: ''},
        {name: 'marginTop', label: MarginTopDes, value_type: 'string', value: ''},
        {name: 'marginBottom', label: MarginBottomDes, value_type: 'string', value: ''},
        {name: 'marginRight', label: MarginRightDes, value_type: 'string', value: ''},
        {name: 'marginLeft', label: MarginLeftDes, value_type: 'string', value: ''}
      ]},
      {name: <PaddingSvg/>, value_type: "rel", value: "", children:[
        {name: 'padding', label: PaddingDes, value_type: 'string', value: ''},
        {name: 'paddingTop', label: PaddingTopDes, value_type: 'string', value: ''},
        {name: 'paddingBottom', label: PaddingBottomDes, value_type: 'string', value: ''},
        {name: 'paddingRight', label: PaddingRightDes, value_type: 'string', value: ''},
        {name: 'paddingLeft', label: PaddingLeftDes, value_type: 'string', value: ''},
      ]},
      {name: <InnerSvg/>, value_type: "rel", value: "", children:[
        {name: 'backgroundColor',label: BackgroundColor ,value_type: 'List_Option_And_Color_Picker', options: [
          {name: 'Dark Color' , value: 'var(--dark_color)', mobileValue: 'dark'},
          {name: 'Light Color' , value: 'var(--light_color)', mobileValue: 'light'},
          {name: 'Dark Background Color' , value: 'var(--dark_bg_color)' , mobileValue: 'dark'},
          {name: 'Light Background Color' , value: 'var(--light_bg_color)', mobileValue: 'light'},
        ]},
        ]},
      {name: <BorderSvg/>, value_type: "rel", value: "", children:[
        {name: 'border', label: BorderDes, value_type: 'string', value: ''},
        {name: 'borderTop', label: BorderTopDes, value_type: 'string', value: ''},
        {name: 'borderBottom', label: BorderBottomDes, value_type: 'string', value: ''},
        {name: 'borderRight', label: BorderRightDes, value_type: 'string', value: ''},
        {name: 'borderLeft', label: BorderLeftDes, value_type: 'string', value: ''},
        {name: 'borderRadius', label: BorderRadiusDes, value_type: 'List_Option', value: '', options: BorderRadiusOptions()},
      ]},
      {name: <FontSvg/>, value_type: "rel", value: "", children:[
        {name: 'color', label: FontColor , value_type: 'List_Option_And_Color_Picker', options: [
          {name: 'Dark Font' , value: 'var(--font_dark)' , mobileValue: 'dark'},
          {name: 'Light Font' , value: 'var(--font_light)' , mobileValue: 'light'},
        ]},
        { name: 'fontFamily', label: FontFamily, value_type: 'List_Option', value: '', options: FontsFamily() },
        { name: 'fontSize', label: FontSize, value_type: 'List_Option', value: '', options: FontsSize() },
        { name: 'fontWeight', label:FontWeightDes , value_type: 'List_Option', value: '', options: FontWeight() },
        { name: 'lineHeight', label: LineHeightDes, value_type: 'List_Option', value: '', options: LineHeight() },
        { name: 'textAlign', label: TextAlignDes, value_type: 'List_Option', value: '', options: TextAlign() },
        { name: 'fontStyle', label: FontStyleDes, value_type: 'List_Option', value: '', options: FontStyle() , noMobile: true },
        { name: 'letterSpacing', label: LetterSpacingDes, value_type: 'List_Option', value: '', options: LetterSpacing(), noMobile: true },
        { name: 'wordBreak', label: WordBreakDes, value_type: 'List_Option', value: '', options: WordBreak() },
        { name: 'whiteSpace', label: WhiteSpaceDes, value_type: 'List_Option', value: '', options: WhiteSpace() },
        { name: 'wordSpacing', label: WordSpacingDes, value_type: 'List_Option', value: '', options: WordSpacing() },
        { name: 'wordWrap', label: WordWrapDes, value_type: 'List_Option', value: '', options: WordWrap() },
        { name: 'textOverflow', label: TextOverflowDes, value_type: 'List_Option', value: '', options: TextOverflow() },
    ]},
  ]},

  { name: "", type: "text", icon: <TextSvg/> , properties: [
    {name: <SizeSvg/>, value_type: "rel", value: "", children:[
      { name: 'width', label: Width, value_type: 'number&string', value: '' },
      { name: 'height', label: Height, value_type: 'number&string', value: '' },
      { name: 'maxWidth', label: MaximumWidth, value_type: 'number&string', value: '' },
      { name: 'minWidth', label: MinimumWidth, value_type: 'number&string', value: '' },
      { name: 'maxHeight', label: MaximumHeight, value_type: 'number&string', value: '' },
      { name: 'minHeight', label: MinimumHeight, value_type: 'number&string', value: '' },
      ]},
      {name: <MarginSvg/>, value_type: 'rel', value: '' , children:[
        {name: 'margin', label: MarginDes, value_type: 'string', value: ''},
        {name: 'marginTop', label: MarginTopDes, value_type: 'string', value: ''},
        {name: 'marginBottom', label: MarginBottomDes, value_type: 'string', value: ''},
        {name: 'marginRight', label: MarginRightDes, value_type: 'string', value: ''},
        {name: 'marginLeft', label: MarginLeftDes, value_type: 'string', value: ''}
      ]},
    {name: <PaddingSvg/>, value_type: "rel", value: "", children:[
        {name: 'padding', label: PaddingDes, value_type: 'string', value: ''},
        {name: 'paddingTop', label: PaddingTopDes, value_type: 'string', value: ''},
        {name: 'paddingBottom', label: PaddingBottomDes, value_type: 'string', value: ''},
        {name: 'paddingRight', label: PaddingRightDes, value_type: 'string', value: ''},
        {name: 'paddingLeft', label: PaddingLeftDes, value_type: 'string', value: ''},
    ]},
    {name: <InnerSvg/>, value_type: "rel", value: "", children:[
      {name: 'backgroundColor',label: BackgroundColor ,value_type: 'List_Option_And_Color_Picker', options: [
        {name: 'Dark Color' , value: 'var(--dark_color)', mobileValue: 'dark'},
        {name: 'Light Color' , value: 'var(--light_color)', mobileValue: 'light'},
        {name: 'Dark Background Color' , value: 'var(--dark_bg_color)', mobileValue: 'dark'},
        {name: 'Light Background Color' , value: 'var(--light_bg_color)', mobileValue: 'light'},
      ]},
      ]},
    {name: <BorderSvg/>, value_type: "rel", value: "", children:[
      {name: 'border', label: BorderDes, value_type: 'string', value: ''},
      {name: 'borderTop', label: BorderTopDes, value_type: 'string', value: ''},
      {name: 'borderBottom', label: BorderBottomDes, value_type: 'string', value: ''},
      {name: 'borderRight', label: BorderRightDes, value_type: 'string', value: ''},
      {name: 'borderLeft', label: BorderLeftDes, value_type: 'string', value: ''},
      {name: 'borderRadius', label: BorderRadiusDes, value_type: 'List_Option', value: '', options: BorderRadiusOptions()},
    ]},
    {name: <FontSvg/>, value_type: "rel", value: "", children:[
      {name: 'color', label: FontColor , value_type: 'List_Option_And_Color_Picker', options: [
        {name: 'Dark Font' , value: 'var(--font_dark)', mobileValue: 'dark'},
        {name: 'Light Font' , value: 'var(--font_light)', mobileValue: 'light'},
      ]},
      { name: 'fontFamily', label: FontFamily, value_type: 'List_Option', value: '', options: FontsFamily() },
      { name: 'fontSize', label: FontSize, value_type: 'List_Option', value: '', options: FontsSize() },
      { name: 'fontWeight', label:FontWeightDes , value_type: 'List_Option', value: '', options: FontWeight() },
      { name: 'lineHeight', label: LineHeightDes, value_type: 'List_Option', value: '', options: LineHeight() },
      { name: 'textAlign', label: TextAlignDes, value_type: 'List_Option', value: '', options: TextAlign() },
      { name: 'fontStyle', label: FontStyleDes, value_type: 'List_Option', value: '', options: FontStyle() },
      { name: 'letterSpacing', label: LetterSpacingDes, value_type: 'List_Option', value: '', options: LetterSpacing() , noMobile: true },
      { name: 'wordBreak', label: WordBreakDes, value_type: 'List_Option', value: '', options: WordBreak(), noMobile: true },
      { name: 'whiteSpace', label: WhiteSpaceDes, value_type: 'List_Option', value: '', options: WhiteSpace() },
      { name: 'wordSpacing', label: WordSpacingDes, value_type: 'List_Option', value: '', options: WordSpacing() },
      { name: 'wordWrap', label: WordWrapDes, value_type: 'List_Option', value: '', options: WordWrap() },
      { name: 'textOverflow', label: TextOverflowDes, value_type: 'List_Option', value: '', options: TextOverflow() },
      { name: 'WebkitLineClamp', label: 'Webkit Line Clamp', value_type: 'string', value: ''},
    ]},
]},

{ name: "", type: "link", icon: <LinkSvg/> , properties: [
  {name: <SizeSvg/>, value_type: "rel", value: "", children:[
    { name: 'width', label: Width, value_type: 'number&string', value: '' },
    { name: 'height', label: Height, value_type: 'number&string', value: '' },
    { name: 'maxWidth', label: MaximumWidth, value_type: 'number&string', value: '' },
    { name: 'minWidth', label: MinimumWidth, value_type: 'number&string', value: '' },
    { name: 'maxHeight', label: MaximumHeight, value_type: 'number&string', value: '' },
    { name: 'minHeight', label: MinimumHeight, value_type: 'number&string', value: '' },
    ]},
    {name: <MarginSvg/>, value_type: 'rel', value: '' , children:[
        {name: 'margin', label: MarginDes, value_type: 'string', value: ''},
        {name: 'marginTop', label: MarginTopDes, value_type: 'string', value: ''},
        {name: 'marginBottom', label: MarginBottomDes, value_type: 'string', value: ''},
        {name: 'marginRight', label: MarginRightDes, value_type: 'string', value: ''},
        {name: 'marginLeft', label: MarginLeftDes, value_type: 'string', value: ''}
      ]},
  {name: <PaddingSvg/>, value_type: "rel", value: "", children:[
      {name: 'padding', label: PaddingDes, value_type: 'string', value: ''},
      {name: 'paddingTop', label: PaddingTopDes, value_type: 'string', value: ''},
      {name: 'paddingBottom', label: PaddingBottomDes, value_type: 'string', value: ''},
      {name: 'paddingRight', label: PaddingRightDes, value_type: 'string', value: ''},
      {name: 'paddingLeft', label: PaddingLeftDes, value_type: 'string', value: ''},
  ]},
  {name: <InnerSvg/>, value_type: "rel", value: "", children:[
    {name: 'backgroundColor',label: BackgroundColor ,value_type: 'List_Option_And_Color_Picker', options: [
      {name: 'Dark Color' , value: 'var(--dark_color)', mobileValue: 'dark'},
      {name: 'Light Color' , value: 'var(--light_color)', mobileValue: 'light'},
      {name: 'Dark Background Color' , value: 'var(--dark_bg_color)', mobileValue: 'dark'},
      {name: 'Light Background Color' , value: 'var(--light_bg_color)', mobileValue: 'light'},
    ]},
    ]},
  {name: <BorderSvg/>, value_type: "rel", value: "", children:[
    {name: 'border', label: BorderDes, value_type: 'string', value: ''},
    {name: 'borderTop', label: BorderTopDes, value_type: 'string', value: ''},
    {name: 'borderBottom', label: BorderBottomDes, value_type: 'string', value: ''},
    {name: 'borderRight', label: BorderRightDes, value_type: 'string', value: ''},
    {name: 'borderLeft', label: BorderLeftDes, value_type: 'string', value: ''},
    {name: 'borderRadius', label: BorderRadiusDes, value_type: 'List_Option', value: '', options: BorderRadiusOptions()},
  ]},
  {name: <FontSvg/>, value_type: "rel", value: "", children:[
    {name: 'color', label: FontColor , value_type: 'List_Option_And_Color_Picker', options: [
      {name: 'Dark Font' , value: 'var(--font_dark)', mobileValue: 'dark'},
      {name: 'Light Font' , value: 'var(--font_light)', mobileValue: 'light'},
    ]},
    { name: 'fontFamily', label: FontFamily, value_type: 'List_Option', value: '', options: FontsFamily() },
    { name: 'fontSize', label: FontSize, value_type: 'List_Option', value: '', options: FontsSize() },
    { name: 'fontWeight', label:FontWeightDes , value_type: 'List_Option', value: '', options: FontWeight() },
    { name: 'lineHeight', label: LineHeightDes, value_type: 'List_Option', value: '', options: LineHeight() },
    { name: 'textAlign', label: TextAlignDes, value_type: 'List_Option', value: '', options: TextAlign() },
    { name: 'fontStyle', label: FontStyleDes, value_type: 'List_Option', value: '', options: FontStyle() },
    { name: 'letterSpacing', label: LetterSpacingDes, value_type: 'List_Option', value: '', options: LetterSpacing() , noMobile: true },
    { name: 'wordBreak', label: WordBreakDes, value_type: 'List_Option', value: '', options: WordBreak(), noMobile: true },
    { name: 'whiteSpace', label: WhiteSpaceDes, value_type: 'List_Option', value: '', options: WhiteSpace() },
    { name: 'wordSpacing', label: WordSpacingDes, value_type: 'List_Option', value: '', options: WordSpacing() },
    { name: 'wordWrap', label: WordWrapDes, value_type: 'List_Option', value: '', options: WordWrap() },
    { name: 'textOverflow', label: TextOverflowDes, value_type: 'List_Option', value: '', options: TextOverflow() },
  ]},
]},

{ name: "", type: "image", icon: <ImageSvg/> , properties: [
  {name: <SizeSvg/>, value_type: "rel", value: "", children:[
    { name: 'width', label: Width, value_type: 'number&string', value: '' },
    { name: 'height', label: Height, value_type: 'number&string', value: '' },
    { name: 'maxWidth', label: MaximumWidth, value_type: 'number&string', value: '' },
    { name: 'minWidth', label: MinimumWidth, value_type: 'number&string', value: '' },
    { name: 'maxHeight', label: MaximumHeight, value_type: 'number&string', value: '' },
    { name: 'minHeight', label: MinimumHeight, value_type: 'number&string', value: '' },
    ]},
  {name: <PaddingSvg/>, value_type: "rel", value: "", children:[
      {name: 'padding', label: PaddingDes, value_type: 'string', value: ''},
      {name: 'paddingTop', label: PaddingTopDes, value_type: 'string', value: ''},
      {name: 'paddingBottom', label: PaddingBottomDes, value_type: 'string', value: ''},
      {name: 'paddingRight', label: PaddingRightDes, value_type: 'string', value: ''},
      {name: 'paddingLeft', label: PaddingLeftDes, value_type: 'string', value: ''},
  ]},
  {name: <InnerSvg/>, value_type: "rel", value: "", children:[
    {name: 'backgroundColor',label: BackgroundColor ,value_type: 'List_Option_And_Color_Picker', options: [
      {name: 'Dark Color' , value: 'var(--dark_color)' , noMobile: true},
      {name: 'Light Color' , value: 'var(--light_color)', noMobile: true},
      {name: 'Dark Background Color' , value: 'var(--dark_bg_color)', noMobile: true},
      {name: 'Light Background Color' , value: 'var(--light_bg_color)', noMobile: true},
    ]},
    ]},
  {name: <BorderSvg/>, value_type: "rel", value: "", children:[
    {name: 'border', label: BorderDes, value_type: 'string', value: ''},
    {name: 'borderTop', label: BorderTopDes, value_type: 'string', value: ''},
    {name: 'borderBottom', label: BorderBottomDes, value_type: 'string', value: ''},
    {name: 'borderRight', label: BorderRightDes, value_type: 'string', value: ''},
    {name: 'borderLeft', label: BorderLeftDes, value_type: 'string', value: ''},
    {name: 'borderRadius', label: BorderRadiusDes, value_type: 'List_Option', value: '', options: BorderRadiusOptions()},
  ]},
  {name: <TransformSvg/>, value_type: "rel", value: "", children:[
    { name: 'transform', label: TransformDes, value_type: 'string', value: '', options: TransformOptions() },
  ]},
  {name: <OptionsSvg/>, value_type: "rel", value: "", children:[
    {name: 'objectFit', label: ObjectFitDes, value_type: 'List_Option', value: '', options: ObjectFitOptions()},
    {name: 'objectPosition', label: ObjectPositionDes, value_type: 'List_Option', value: '', options: ObjectPositionOptions(), noMobile: true},
    {name: 'opacity', label: OpacityDes, value_type: 'List_Option', value: '', options: OpacityOptions()},
  ]},
  {name: <PositionSvg/>, value_type: "rel", value: "", children:[
    { name: 'position', label: PositionDes, value_type: 'List_Option', value: '', options: PositionOptions() },
    { name: 'top', label: TopDes, value_type: 'number&string', value: '' },
    { name: 'right', label: RightDes, value_type: 'number&string', value: '' },
    { name: 'bottom', label: BottomDes, value_type: 'number&string', value: '' },
    { name: 'left', label: LeftDes, value_type: 'number&string', value: '' },
  ]},
  {name: <BoxShadowSvg/>, value_type: "rel", value: "", children:[
    {name: 'boxShadow', label: BoxShadowDes, value_type: 'List_Option', value: '', options: BoxShadowOptions()},
  ]},
  ]},

  { name: "", type: "dropdown", icon: <DropDownSvg/> , properties: [
    {name: <SizeSvg/>, value_type: "rel", value: "", children:[
      { name: 'width', label: Width, value_type: 'number&string', value: '' },
      { name: 'height', label: Height, value_type: 'number&string', value: '' },
    ]},
    {name: <InnerSvg/>, value_type: "rel", value: "", children:[
      {name: 'backgroundColor',label: BackgroundColor ,value_type: 'List_Option_And_Color_Picker', options: [
        {name: 'Dark Color' , value: 'var(--dark_color)' , mobileValue: 'dark'},
        {name: 'Light Color' , value: 'var(--light_color)', mobileValue: 'light'},
        {name: 'Dark Background Color' , value: 'var(--dark_bg_color)', mobileValue: 'dark'},
        {name: 'Light Background Color' , value: 'var(--light_bg_color)', mobileValue: 'light'},
      ]},
      ]},
    {name: <BorderSvg/>, value_type: "rel", value: "", children:[
      {name: 'border', label: BorderDes, value_type: 'string', value: ''},
      {name: 'borderRadius', label: BorderRadiusDes, value_type: 'List_Option', value: '', options: BorderRadiusOptions()},
    ]},
      {name: <FontSvg/>, value_type: "rel", value: "", children:[
        {name: 'color', label: FontColor , value_type: 'List_Option_And_Color_Picker', options: [
          {name: 'Dark Font' , value: 'var(--font_dark)', mobileValue: 'dark'},
          {name: 'Light Font' , value: 'var(--font_light)', mobileValue: 'light'},
        ]},
        { name: 'fontFamily', label: FontFamily, value_type: 'List_Option', value: '', options: FontsFamily() },
        { name: 'fontSize', label: FontSize, value_type: 'List_Option', value: '', options: FontsSize() },
        { name: 'fontWeight', label:FontWeightDes , value_type: 'List_Option', value: '', options: FontWeight() },
    ]},
  ]},

  { name: "", type: "model_form", icon: <ModalFormSvg/> , properties: [
    {name: <BoxShadowSvg/>, value_type: "rel", value: "", children:[
      {name: 'boxShadow', label: BoxShadowDes, value_type: 'List_Option', value: '', options: BoxShadowOptions()},
    ]},
    {name: <InnerSvg/>, value_type: "rel", value: "", children:[
      {name: 'backgroundColor',label: BackgroundColor ,value_type: 'List_Option_And_Color_Picker', options: [
        {name: 'Dark Color' , value: 'var(--dark_color)'},
        {name: 'Light Color' , value: 'var(--light_color)'},
        {name: 'Dark Background Color' , value: 'var(--dark_bg_color)'},
        {name: 'Light Background Color' , value: 'var(--light_bg_color)'},
      ]},
      ]},
    {name: <BorderSvg/>, value_type: "rel", value: "", children:[
      {name: 'border', label: BorderDes, value_type: 'string', value: ''},
      {name: 'borderTop', label: BorderTopDes, value_type: 'string', value: ''},
      {name: 'borderBottom', label: BorderBottomDes, value_type: 'string', value: ''},
      {name: 'borderRight', label: BorderRightDes, value_type: 'string', value: ''},
      {name: 'borderLeft', label: BorderLeftDes, value_type: 'string', value: ''},
      {name: 'borderRadius', label: BorderRadiusDes, value_type: 'List_Option', value: '', options: BorderRadiusOptions()},
    ]},
    {name: <SizeSvg/>, value_type: "rel", value: "", children:[
      { name: 'width', label: Width, value_type: 'number&string', value: '' },
      { name: 'height', label: Height, value_type: 'number&string', value: '' },
      { name: 'maxWidth', label: MaximumWidth, value_type: 'number&string', value: '' },
      { name: 'minWidth', label: MinimumWidth, value_type: 'number&string', value: '' },
      { name: 'maxHeight', label: MaximumHeight, value_type: 'number&string', value: '' },
      { name: 'minHeight', label: MinimumHeight, value_type: 'number&string', value: '' },
      ]},
      {name: <PaddingSvg/>, value_type: "rel", value: "", children:[
        {name: 'padding', label: PaddingDes, value_type: 'string', value: ''},
        {name: 'paddingTop', label: PaddingTopDes, value_type: 'string', value: ''},
        {name: 'paddingBottom', label: PaddingBottomDes, value_type: 'string', value: ''},
        {name: 'paddingRight', label: PaddingRightDes, value_type: 'string', value: ''},
        {name: 'paddingLeft', label: PaddingLeftDes, value_type: 'string', value: ''},
    ]},
  ]},
  { name: "", type: "model_wizard", icon: <ModalWizardSvg/> , properties: [
  {name: <BoxShadowSvg/>, value_type: "rel", value: "", children:[
    {name: 'boxShadow', label: BoxShadowDes, value_type: 'List_Option', value: '', options: BoxShadowOptions()},
  ]},
  {name: <InnerSvg/>, value_type: "rel", value: "", children:[
    {name: 'backgroundColor',label: BackgroundColor ,value_type: 'List_Option_And_Color_Picker', options: [
      {name: 'Dark Color' , value: 'var(--dark_color)'},
      {name: 'Light Color' , value: 'var(--light_color)'},
      {name: 'Dark Background Color' , value: 'var(--dark_bg_color)'},
      {name: 'Light Background Color' , value: 'var(--light_bg_color)'},
    ]},
    ]},
  {name: <BorderSvg/>, value_type: "rel", value: "", children:[
    {name: 'border', label: BorderDes, value_type: 'string', value: ''},
    {name: 'borderTop', label: BorderTopDes, value_type: 'string', value: ''},
    {name: 'borderBottom', label: BorderBottomDes, value_type: 'string', value: ''},
    {name: 'borderRight', label: BorderRightDes, value_type: 'string', value: ''},
    {name: 'borderLeft', label: BorderLeftDes, value_type: 'string', value: ''},
    {name: 'borderRadius', label: BorderRadiusDes, value_type: 'List_Option', value: '', options: BorderRadiusOptions()},
  ]},
  {name: <SizeSvg/>, value_type: "rel", value: "", children:[
    { name: 'width', label: Width, value_type: 'number&string', value: '' },
    { name: 'height', label: Height, value_type: 'number&string', value: '' },
    { name: 'maxWidth', label: MaximumWidth, value_type: 'number&string', value: '' },
    { name: 'minWidth', label: MinimumWidth, value_type: 'number&string', value: '' },
    { name: 'maxHeight', label: MaximumHeight, value_type: 'number&string', value: '' },
    { name: 'minHeight', label: MinimumHeight, value_type: 'number&string', value: '' },
    ]},
    {name: <PaddingSvg/>, value_type: "rel", value: "", children:[
      {name: 'padding', label: PaddingDes, value_type: 'string', value: ''},
      {name: 'paddingTop', label: PaddingTopDes, value_type: 'string', value: ''},
      {name: 'paddingBottom', label: PaddingBottomDes, value_type: 'string', value: ''},
      {name: 'paddingRight', label: PaddingRightDes, value_type: 'string', value: ''},
      {name: 'paddingLeft', label: PaddingLeftDes, value_type: 'string', value: ''},
  ]},
]},

{ name: "", type: "login_form", icon: <LoginFormSvg/> , properties: [
  {name: <BoxShadowSvg/>, value_type: "rel", value: "", children:[
    {name: 'boxShadow', label: BoxShadowDes, value_type: 'List_Option', value: '', options: BoxShadowOptions()},
  ]},
  {name: <InnerSvg/>, value_type: "rel", value: "", children:[
    {name: 'backgroundColor',label: BackgroundColor ,value_type: 'List_Option_And_Color_Picker', options: [
      {name: 'Dark Color' , value: 'var(--dark_color)', mobileValue: 'dark'},
      {name: 'Light Color' , value: 'var(--light_color)', mobileValue: 'light'},
      {name: 'Dark Background Color' , value: 'var(--dark_bg_color)', mobileValue: 'dark'},
      {name: 'Light Background Color' , value: 'var(--light_bg_color)', mobileValue: 'light'},
    ]},
    ]},
  {name: <BorderSvg/>, value_type: "rel", value: "", children:[
    {name: 'border', label: BorderDes, value_type: 'string', value: ''},
    {name: 'borderTop', label: BorderTopDes, value_type: 'string', value: ''},
    {name: 'borderBottom', label: BorderBottomDes, value_type: 'string', value: ''},
    {name: 'borderRight', label: BorderRightDes, value_type: 'string', value: ''},
    {name: 'borderLeft', label: BorderLeftDes, value_type: 'string', value: ''},
    {name: 'borderRadius', label: BorderRadiusDes, value_type: 'List_Option', value: '', options: BorderRadiusOptions()},
  ]},
  {name: <SizeSvg/>, value_type: "rel", value: "", children:[
    { name: 'width', label: Width, value_type: 'number&string', value: '' },
    { name: 'height', label: Height, value_type: 'number&string', value: '' },
    { name: 'maxWidth', label: MaximumWidth, value_type: 'number&string', value: '' },
    { name: 'minWidth', label: MinimumWidth, value_type: 'number&string', value: '' },
    { name: 'maxHeight', label: MaximumHeight, value_type: 'number&string', value: '' },
    { name: 'minHeight', label: MinimumHeight, value_type: 'number&string', value: '' },
    ]},
    {name: <PaddingSvg/>, value_type: "rel", value: "", children:[
      {name: 'padding', label: PaddingDes, value_type: 'string', value: ''},
      {name: 'paddingTop', label: PaddingTopDes, value_type: 'string', value: ''},
      {name: 'paddingBottom', label: PaddingBottomDes, value_type: 'string', value: ''},
      {name: 'paddingRight', label: PaddingRightDes, value_type: 'string', value: ''},
      {name: 'paddingLeft', label: PaddingLeftDes, value_type: 'string', value: ''},
  ]},
]},


{ name: "", type: "category_list_item", icon: <CategoryListItemSvg/> , properties: properties},

{ name: "", type: "item_details", icon: <ItemDetailsSvg /> , properties: properties},

{ name: "", type: "item_list_detils",icon: <ItemListDetils/> , properties: properties},
{ name: "", type: "table",icon: <TableSvg/> , properties: properties},
{ name: "", type: "report",icon: <ReportDetils /> , properties: properties},

{ name: "", type: "banner_slider",icon: <BannerSlider/> , properties: []},

{ name: "", type: "auto_slider",icon: <AutoSlider/> , properties: []},

{ name: "", type: "appointment_calendar", icon: <AppointmentCalendar /> , properties: properties},

{ name: "", type: "dev_component", icon: <DevComponentSvg/> }

];