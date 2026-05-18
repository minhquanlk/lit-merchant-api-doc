const BASE_URL = "https://api.litnow.vn";

const copy = {
    vi: {
        envLabel: "Base URL",
        marketLabel: "Thị trường Việt Nam",
        languageLabel: "Ngôn ngữ",
        examplesTitle: "Ví dụ code",
        examplesLead:
            "Các ví dụ dưới đây minh họa cách tạo body JSON, ký request bằng MD5 và gọi API LIT Merchant.",
        qrCaption:
            "Hiển thị QR được tạo từ `biz_response.data.qr_code` trong vùng trắng của frame LIT Merchant.",
        downloadFrame: "Download frame",
        previousPage: "Trang trước",
        nextPage: "Trang sau",
        pageNavigation: "Điều hướng trang",
        sourceNote:
            "Mỗi ví dụ giữ cùng nguyên tắc: body gửi đi phải giống hoàn toàn với body dùng để tạo chữ ký.",
    },
    en: {
        envLabel: "Base URL",
        marketLabel: "Vietnam market",
        languageLabel: "Language",
        examplesTitle: "Code example",
        examplesLead:
            "The examples below show how to build the JSON body, sign the request with MD5, and call the LIT Merchant API.",
        qrCaption:
            "Display the QR generated from `biz_response.data.qr_code` inside the white area of the LIT Merchant frame.",
        downloadFrame: "Download frame",
        previousPage: "Previous page",
        nextPage: "Next page",
        pageNavigation: "Page navigation",
        sourceNote:
            "Each example keeps the same rule: the request body sent to the API must match the body used for signature generation exactly.",
    },
    zh: {
        envLabel: "请求域名",
        marketLabel: "越南市场",
        languageLabel: "语言",
        examplesTitle: "代码示例",
        examplesLead:
            "以下示例说明如何构造 JSON body、使用 MD5 生成签名，并调用 LIT Merchant API。",
        qrCaption:
            "将基于 `biz_response.data.qr_code` 生成的二维码展示在 LIT Merchant 框架的白色区域。",
        downloadFrame: "下载框架",
        previousPage: "上一页",
        nextPage: "下一页",
        pageNavigation: "页面导航",
        sourceNote:
            "每个示例遵循同一规则：实际发送的 body 必须与参与签名的 body 完全一致。",
    },
};

const columns = {
    vi: ["Tham số", "Bắt buộc", "Kiểu", "Ghi chú"],
    en: ["Parameter", "Required", "Type", "Note"],
    zh: ["参数", "必填", "类型", "说明"],
};

const codeColumns = {
    vi: ["Giá trị", "Nhóm", "Áp dụng", "Ý nghĩa"],
    en: ["Value", "Group", "Applies to", "Meaning"],
    zh: ["取值", "分类", "适用范围", "说明"],
};

const errorColumns = {
    vi: ["Mã", "Cấp", "Thông điệp", "Ghi chú"],
    en: ["Code", "Level", "Message", "Note"],
    zh: ["错误码", "层级", "错误信息", "说明"],
};

const paymentListColumns = {
    vi: ["Type", "Mô tả", "Nguồn", "Ghi chú"],
    en: ["Type", "Description", "Source", "Note"],
    zh: ["类型", "说明", "来源", "备注"],
};

const responseReference = {
    vi: [
        {
            type: "table",
            title: "Response envelope",
            columns: columns.vi,
            rows: [
                [
                    "`result_code`",
                    "Y",
                    "String",
                    "Mã xử lý request ở lớp API. `200` nghĩa request hợp lệ; `400/500` đi kèm `error_code` và `error_message`.",
                ],
                [
                    "`error_code`",
                    "N",
                    "String",
                    "Mã lỗi request, chỉ có khi `result_code` khác `200`.",
                ],
                [
                    "`error_message`",
                    "N",
                    "String",
                    "Thông điệp lỗi request, thường là tiếng Trung theo upstream.",
                ],
                [
                    "`biz_response`",
                    "N",
                    "Object",
                    "Kết quả nghiệp vụ. Có khi `result_code=200`.",
                ],
                [
                    "`biz_response.result_code`",
                    "Y",
                    "String",
                    "Kết quả nghiệp vụ như `PRECREATE_SUCCESS`, `PAY_SUCCESS`, `SUCCESS`, `FAIL`.",
                ],
                [
                    "`biz_response.error_code`",
                    "N",
                    "String",
                    "Mã lỗi nghiệp vụ khi giao dịch thất bại hoặc trạng thái không xác định.",
                ],
                [
                    "`biz_response.error_message`",
                    "N",
                    "String",
                    "Thông điệp lỗi nghiệp vụ, thường là tiếng Trung theo upstream.",
                ],
                [
                    "`biz_response.data`",
                    "N",
                    "Object",
                    "Dữ liệu giao dịch. Có trong response thành công, in-progress hoặc một số response fail có phát sinh đơn.",
                ],
            ],
        },
        {
            type: "table",
            title: "Precreate response data",
            columns: columns.vi,
            rows: [
                [
                    "`sn`",
                    "Y",
                    "String(16)",
                    "Mã giao dịch LIT Merchant, dùng để query và đối soát.",
                ],
                [
                    "`client_sn`",
                    "Y",
                    "String(32)",
                    "Mã đơn hàng trong hệ thống đối tác.",
                ],
                [
                    "`trade_no`",
                    "N",
                    "String(64)",
                    "Mã đơn ở kênh thanh toán nếu upstream đã tạo.",
                ],
                [
                    "`status`",
                    "Y",
                    "String(32)",
                    "Trạng thái giao dịch, ví dụ `IN_PROG`, `SUCCESS`.",
                ],
                [
                    "`order_status`",
                    "Y",
                    "String(32)",
                    "Trạng thái đơn, với precreate thường là `CREATED`.",
                ],
                [
                    "`payway`",
                    "Y",
                    "String",
                    "Kênh thanh toán. Với LIT QR dynamic request cố định `2001`.",
                ],
                [
                    "`payway_name`",
                    "N",
                    "String(128)",
                    "Tên kênh thanh toán trả về từ upstream.",
                ],
                [
                    "`sub_payway`",
                    "Y",
                    "String",
                    "`2` = 二维码支付 / QR payment.",
                ],
                [
                    "`qr_code`",
                    "Y",
                    "String",
                    "Dữ liệu dùng để tạo mã QR và hiển thị trong frame LIT Merchant.",
                ],
                ["`total_amount`", "Y", "String(10)", "Tổng tiền giao dịch."],
                [
                    "`net_amount`",
                    "Y",
                    "String(10)",
                    "Số tiền thực nhận; trước hoàn tiền thường bằng `total_amount`.",
                ],
                ["`subject`", "Y", "String(64)", "Mô tả ngắn của giao dịch."],
                [
                    "`operator`",
                    "Y",
                    "String(32)",
                    "Nhân viên hoặc hệ thống tạo giao dịch.",
                ],
                [
                    "`reflect`",
                    "N",
                    "String(64)",
                    "Giá trị đối tác gửi trong request để mapping nội bộ.",
                ],
                [
                    "`wap_pay_request`",
                    "N/A",
                    "String(1024)",
                    "Không áp dụng cho LIT QR dynamic.",
                ],
                [
                    "`payment_list`",
                    "N",
                    "Array",
                    "Thông tin ưu đãi có thể xuất hiện trong callback/upstream response.",
                ],
            ],
        },
        {
            type: "table",
            title: "Pay / Query response data",
            columns: columns.vi,
            rows: [
                [
                    "`terminal_sn`",
                    "N",
                    "String(32)",
                    "Terminal xử lý giao dịch.",
                ],
                ["`sn`", "Y", "String(16)", "Mã giao dịch LIT Merchant."],
                ["`client_sn`", "Y", "String(32)", "Mã đơn hàng đối tác."],
                [
                    "`client_tsn`",
                    "N",
                    "String",
                    "Mã transaction phía client/upstream, có thể xuất hiện trong Pay hoặc Query.",
                ],
                [
                    "`trade_no`",
                    "N",
                    "String(64)",
                    "Mã giao dịch ở kênh thanh toán.",
                ],
                [
                    "`status`",
                    "Y",
                    "String(32)",
                    "Trạng thái giao dịch kỹ thuật.",
                ],
                [
                    "`order_status`",
                    "Y",
                    "String(32)",
                    "Trạng thái đơn dùng để đóng/mở đơn trên POS/ERP.",
                ],
                ["`payway`", "Y", "String", "Kênh thanh toán trả về."],
                ["`payway_name`", "N", "String(128)", "Tên kênh thanh toán."],
                [
                    "`sub_payway`",
                    "N",
                    "String",
                    "Phương thức thanh toán, ví dụ `1` barcode hoặc `2` QR.",
                ],
                [
                    "`payer_uid`",
                    "N",
                    "String(64)",
                    "ID người thanh toán ở kênh thanh toán.",
                ],
                [
                    "`payer_login`",
                    "N",
                    "String(128)",
                    "Tài khoản đăng nhập của người thanh toán, có thể được mask.",
                ],
                ["`total_amount`", "Y", "String(10)", "Tổng tiền giao dịch."],
                [
                    "`net_amount`",
                    "Y",
                    "String(10)",
                    "Số tiền thực nhận sau các điều chỉnh/hoàn tiền.",
                ],
                ["`subject`", "Y", "String(64)", "Mô tả ngắn của giao dịch."],
                [
                    "`description`",
                    "N",
                    "String/JSON",
                    "Mô tả hàng hoá, có thể xuất hiện trong Query.",
                ],
                [
                    "`finish_time`",
                    "N",
                    "String(13)",
                    "Thời điểm hoàn tất ở LIT/upstream, Unix milliseconds.",
                ],
                [
                    "`channel_finish_time`",
                    "N",
                    "String(13)",
                    "Thời điểm hoàn tất ở kênh thanh toán, Unix milliseconds.",
                ],
                [
                    "`ctime`",
                    "N",
                    "String(13)",
                    "Thời điểm tạo giao dịch, Unix milliseconds.",
                ],
                [
                    "`operator`",
                    "Y",
                    "String(32)",
                    "Nhân viên hoặc hệ thống tạo giao dịch.",
                ],
                [
                    "`store_id`",
                    "N",
                    "String",
                    "Mã cửa hàng nếu upstream trả về.",
                ],
                [
                    "`terminal_id`",
                    "N",
                    "String",
                    "ID terminal nội bộ nếu upstream trả về.",
                ],
                [
                    "`reflect`",
                    "N",
                    "String(64)",
                    "Giá trị đối tác gửi trong request.",
                ],
                [
                    "`payment_list`",
                    "N",
                    "Array",
                    "Danh sách ưu đãi/nguồn tiền nếu kênh thanh toán trả về.",
                ],
            ],
        },
        {
            type: "table",
            title: "Business result codes",
            columns: codeColumns.vi,
            rows: [
                [
                    "`PRECREATE_SUCCESS`",
                    "SUCCESS",
                    "Precreate",
                    "Tạo đơn QR thành công.",
                ],
                [
                    "`PRECREATE_FAIL`",
                    "FAIL",
                    "Precreate",
                    "Tạo đơn QR thất bại.",
                ],
                ["`PAY_SUCCESS`", "SUCCESS", "Pay", "Thanh toán thành công."],
                [
                    "`PAY_IN_PROGRESS`",
                    "INPROGRESS",
                    "Pay",
                    "Thanh toán đang xử lý, cần query tiếp.",
                ],
                [
                    "`PAY_FAIL`",
                    "FAIL",
                    "Pay",
                    "Thanh toán thất bại và đơn đã được huỷ.",
                ],
                [
                    "`PAY_FAIL_ERROR`",
                    "ERROR",
                    "Pay",
                    "Thanh toán lỗi, kết quả chưa chắc chắn.",
                ],
                [
                    "`SUCCESS`",
                    "SUCCESS",
                    "Query",
                    "Query thành công; đọc `biz_response.data.order_status` để biết trạng thái đơn.",
                ],
                [
                    "`FAIL`",
                    "FAIL",
                    "Query / common",
                    "Nghiệp vụ thất bại nhưng không nhất thiết thay đổi trạng thái đơn.",
                ],
                [
                    "`REFUND_SUCCESS`",
                    "SUCCESS",
                    "Refund",
                    "Hoàn tiền thành công. API chưa mở cho đối tác.",
                ],
                [
                    "`REFUND_ERROR`",
                    "ERROR",
                    "Refund",
                    "Hoàn tiền lỗi, kết quả chưa chắc chắn. API chưa mở cho đối tác.",
                ],
                [
                    "`CANCEL_SUCCESS`",
                    "SUCCESS",
                    "Cancel/Revoke",
                    "Huỷ/撤单 thành công. API chưa mở cho đối tác.",
                ],
                [
                    "`CANCEL_ERROR`",
                    "ERROR",
                    "Cancel/Revoke",
                    "Huỷ/撤单 lỗi, kết quả chưa chắc chắn. API chưa mở cho đối tác.",
                ],
                [
                    "`CANCEL_ABORT_SUCCESS`",
                    "SUCCESS",
                    "Cancel",
                    "Huỷ đơn đang thanh toán thành công. API chưa mở cho đối tác.",
                ],
                [
                    "`CANCEL_ABORT_ERROR`",
                    "ERROR",
                    "Cancel",
                    "Huỷ đơn đang thanh toán thất bại, trạng thái chưa chắc chắn.",
                ],
            ],
        },
        {
            type: "table",
            title: "Request error codes",
            columns: errorColumns.vi,
            rows: [
                [
                    "`INVALID_PARAMS`",
                    "`400`",
                    "参数错误",
                    "Request body/header không hợp lệ.",
                ],
                [
                    "`INVALID_TERMINAL`",
                    "`400`",
                    "终端错误",
                    "Terminal không hợp lệ.",
                ],
                ["`ILLEGAL_SIGN`", "`400`", "签名错误", "Chữ ký không hợp lệ."],
                [
                    "`UNKNOWN_SYSTEM_ERROR`",
                    "`500`",
                    "系统错误",
                    "Lỗi hệ thống.",
                ],
                [
                    "`REQUEST_FAIL`",
                    "`500`",
                    "业务繁忙，请稍后重试",
                    "Hệ thống bận, retry theo chiến lược an toàn.",
                ],
                [
                    "`EXTERNAL_SERVICE_EXCEPTION`",
                    "`500`",
                    "External service error",
                    "Lỗi dịch vụ ngoài; cần lưu thông tin để đối soát.",
                ],
                [
                    "`PAY_STATUS_CLOSED`",
                    "`500`",
                    "商户收款权限被关闭，请联系您的客户经理",
                    "Quyền thu tiền của merchant bị đóng.",
                ],
            ],
        },
        {
            type: "table",
            title: "Business error codes",
            columns: errorColumns.vi,
            rows: [
                [
                    "`INVALID_BARCODE`",
                    "biz",
                    "条码错误",
                    "Mã thanh toán không hợp lệ.",
                ],
                [
                    "`INSUFFICIENT_FUND`",
                    "biz",
                    "账户金额不足",
                    "Số dư người mua không đủ.",
                ],
                [
                    "`EXPIRED_BARCODE`",
                    "biz",
                    "过期的支付条码",
                    "Mã thanh toán đã hết hạn.",
                ],
                [
                    "`BUYER_OVER_DAILY_LIMIT`",
                    "biz",
                    "付款人当日付款金额超过上限",
                    "Người mua vượt hạn mức ngày.",
                ],
                [
                    "`BUYER_OVER_TRANSACTION_LIMIT`",
                    "biz",
                    "付款人单笔付款金额超过上限",
                    "Người mua vượt hạn mức giao dịch.",
                ],
                [
                    "`SELLER_OVER_DAILY_LIMIT`",
                    "biz",
                    "收款账户当日收款金额超过上限",
                    "Tài khoản nhận vượt hạn mức ngày.",
                ],
                [
                    "`TRADE_NOT_EXIST`",
                    "biz",
                    "交易不存在",
                    "Giao dịch không tồn tại.",
                ],
                [
                    "`TRADE_HAS_SUCCESS`",
                    "biz",
                    "交易已被支付",
                    "Giao dịch đã được thanh toán.",
                ],
                [
                    "`SELLER_BALANCE_NOT_ENOUGH`",
                    "biz",
                    "卖家余额不足",
                    "Số dư merchant không đủ.",
                ],
                [
                    "`REFUND_AMT_NOT_EQUAL_TOTAL`",
                    "biz",
                    "退款金额无效",
                    "Số tiền hoàn không hợp lệ.",
                ],
                ["`TRADE_FAILED`", "biz", "交易失败", "Giao dịch thất bại."],
                [
                    "`UNEXPECTED_PROVIDER_ERROR`",
                    "biz",
                    "不认识的支付通道",
                    "Kênh thanh toán không nhận diện được.",
                ],
                [
                    "`TRADE_TIMEOUT`",
                    "biz",
                    "交易超时自动撤单",
                    "Giao dịch timeout và tự huỷ.",
                ],
                [
                    "`ACCOUNT_BALANCE_NOT_ENOUGH`",
                    "biz",
                    "商户余额不足",
                    "Số dư merchant không đủ.",
                ],
                [
                    "`CLIENT_SN_CONFLICT`",
                    "biz",
                    "client_sn在系统中已存在",
                    "`client_sn` đã tồn tại.",
                ],
                [
                    "`UPAY_ORDER_NOT_EXIST`",
                    "biz",
                    "订单不存在",
                    "Đơn hàng không tồn tại.",
                ],
                [
                    "`REFUNDABLE_AMOUNT_NOT_ENOUGH`",
                    "biz",
                    "订单可退金额不足",
                    "Số tiền có thể hoàn không đủ.",
                ],
                [
                    "`UPAY_TERMINAL_NOT_EXISTS`",
                    "biz",
                    "终端号在交易系统中不存在",
                    "Terminal không tồn tại.",
                ],
                [
                    "`UPAY_TERMINAL_STATUS_ABNORMAL`",
                    "biz",
                    "终端未激活",
                    "Terminal chưa active hoặc trạng thái bất thường.",
                ],
                [
                    "`UPAY_CANCEL_ORDER_NOOP`",
                    "biz",
                    "无效操作，订单已经是撤单状态了",
                    "Đơn đã ở trạng thái huỷ.",
                ],
                [
                    "`UPAY_CANCEL_INVALID_ORDER_STATE`",
                    "biz",
                    "当前订单状态不可撤销",
                    "Trạng thái đơn không thể huỷ.",
                ],
                [
                    "`UPAY_REFUND_ORDER_NOOP`",
                    "biz",
                    "无效操作，本次退款退款已经完成了",
                    "Lần hoàn tiền đã hoàn tất.",
                ],
                [
                    "`UPAY_REFUND_INVALID_ORDER_STATE`",
                    "biz",
                    "当前订单状态不可退款",
                    "Trạng thái đơn không thể hoàn.",
                ],
                [
                    "`UPAY_STORE_OVER_DAILY_LIMIT`",
                    "biz",
                    "商户日收款额超过上限",
                    "Merchant vượt hạn mức thu trong ngày.",
                ],
                [
                    "`UPAY_TCP_ORDER_NOT_REFUNDABLE`",
                    "biz",
                    "订单参与了活动并且无法撤销",
                    "Đơn tham gia chương trình và không thể huỷ/hoàn theo API.",
                ],
                [
                    "`EXTERNAL_SERVICE_EXCEPTION`",
                    "biz",
                    "External service error",
                    "Lỗi dịch vụ ngoài, cần lưu để đối soát.",
                ],
            ],
        },
        {
            type: "table",
            title: "Order status",
            columns: codeColumns.vi,
            rows: [
                [
                    "`CREATED`",
                    "Intermediate",
                    "Precreate/Query",
                    "Đơn đã tạo và sẵn sàng thanh toán.",
                ],
                [
                    "`PAID`",
                    "Final",
                    "Pay/Query/Callback",
                    "Đơn đã thanh toán thành công.",
                ],
                [
                    "`PAY_CANCELED`",
                    "Final",
                    "Pay/Query",
                    "Thanh toán thất bại và đơn đã huỷ.",
                ],
                [
                    "`PAY_ERROR`",
                    "Non-final/risk",
                    "Pay/Query",
                    "Thanh toán lỗi, kết quả chưa chắc chắn.",
                ],
                [
                    "`REFUNDED`",
                    "Final",
                    "Refund/Query",
                    "Đơn đã hoàn toàn bộ. API hoàn chưa mở cho đối tác.",
                ],
                [
                    "`PARTIAL_REFUNDED`",
                    "Final",
                    "Refund/Query",
                    "Đơn đã hoàn một phần. API hoàn chưa mở cho đối tác.",
                ],
                [
                    "`REFUND_INPROGRESS`",
                    "Intermediate",
                    "Refund/Query",
                    "Hoàn tiền đang xử lý.",
                ],
                [
                    "`REFUND_ERROR`",
                    "Non-final/risk",
                    "Refund/Query",
                    "Hoàn tiền lỗi, kết quả chưa chắc chắn.",
                ],
                [
                    "`CANCELED`",
                    "Final",
                    "Cancel/Query",
                    "Đơn đã được huỷ bởi client/upstream.",
                ],
                [
                    "`CANCEL_ERROR`",
                    "Non-final/risk",
                    "Cancel/Query",
                    "Huỷ lỗi, kết quả chưa chắc chắn.",
                ],
                [
                    "`CANCEL_INPROGRESS`",
                    "Intermediate",
                    "Cancel/Query",
                    "Huỷ đang xử lý.",
                ],
                [
                    "`INVALID_STATUS_CODE`",
                    "Error",
                    "Query",
                    "Mã trạng thái không hợp lệ.",
                ],
            ],
        },
        {
            type: "table",
            title: "Transaction status",
            columns: codeColumns.vi,
            rows: [
                ["`SUCCESS`", "Final", "Pay/Query", "Giao dịch thành công."],
                [
                    "`FAIL_CANCELED`",
                    "Final",
                    "Pay/Query",
                    "Giao dịch thất bại và đã huỷ.",
                ],
                [
                    "`FAIL_PROTOCOL_1`",
                    "Risk",
                    "Pay/Refund",
                    "Lỗi protocol, kết quả chưa chắc chắn; cần liên hệ vận hành.",
                ],
                [
                    "`FAIL_IO_1`",
                    "Risk",
                    "Pay/Refund",
                    "Lỗi IO, xử lý như lỗi protocol.",
                ],
                [
                    "`FAIL_PROTOCOL_2`",
                    "Risk",
                    "Pay/Refund",
                    "Lỗi protocol, kết quả chưa chắc chắn.",
                ],
                [
                    "`FAIL_IO_2`",
                    "Risk",
                    "Pay/Refund",
                    "Lỗi IO, kết quả chưa chắc chắn.",
                ],
                [
                    "`FAIL_PROTOCOL_3`",
                    "Risk",
                    "Pay/Refund",
                    "Lỗi protocol, kết quả chưa chắc chắn.",
                ],
                [
                    "`FAIL_ERROR`",
                    "Risk",
                    "Pay",
                    "Sau payment fail, hệ thống tự huỷ nhưng huỷ thất bại.",
                ],
                [
                    "`CANCEL_ERROR`",
                    "Risk",
                    "Cancel",
                    "Yêu cầu huỷ đã phát sinh nhưng thất bại.",
                ],
                [
                    "`REFUND_ERROR`",
                    "Risk",
                    "Refund",
                    "Yêu cầu hoàn tiền đã phát sinh nhưng thất bại.",
                ],
                [
                    "`CREATED`",
                    "Intermediate",
                    "Precreate/Query",
                    "Đơn đã được nhận, chưa bắt đầu xử lý.",
                ],
                [
                    "`ABORTED`",
                    "Final",
                    "Query",
                    "Xác nhận thất bại; giao dịch đã đóng.",
                ],
                [
                    "`IN_PROG`",
                    "Intermediate",
                    "Pay/Query",
                    "Đang xử lý; cần query tiếp.",
                ],
                [
                    "`ERROR_RECOVERY`",
                    "Intermediate",
                    "Cancel/Query",
                    "Đang recovery/huỷ.",
                ],
                [
                    "`PRE_SUCCESS`",
                    "Intermediate",
                    "Query",
                    "Tác vụ trước đó thành công, cần query tiếp.",
                ],
            ],
        },
        {
            type: "table",
            title: "payment_list types",
            columns: paymentListColumns.vi,
            rows: [
                [
                    "`HONGBAO_WOSAI`",
                    "Red packet từ Wosai",
                    "Platform",
                    "平台优惠",
                ],
                [
                    "`HONGBAO_WOSAI_MCH`",
                    "Red packet từ merchant qua Wosai",
                    "Merchant",
                    "商家优惠",
                ],
                [
                    "`DISCOUNT_WOSAI`",
                    "Discount từ Wosai",
                    "Platform",
                    "平台优惠",
                ],
                [
                    "`DISCOUNT_WOSAI_MCH`",
                    "Discount từ merchant qua Wosai",
                    "Merchant",
                    "商家优惠",
                ],
                [
                    "`DISCOUNT_CHANNEL`",
                    "Discount từ kênh thanh toán",
                    "Platform",
                    "支付通道优惠",
                ],
                [
                    "`DISCOUNT_CHANNEL_MCH`",
                    "Discount từ merchant qua kênh thanh toán",
                    "Merchant",
                    "免充值",
                ],
                [
                    "`DISCOUNT_CHANNEL_MCH_TOP_UP`",
                    "Discount merchant cần top up",
                    "Platform",
                    "充值",
                ],
                [
                    "`HONGBAO_CHANNEL`",
                    "Red packet từ kênh thanh toán",
                    "Platform",
                    "支付通道红包",
                ],
                [
                    "`HONGBAO_CHANNEL_MCH`",
                    "Red packet merchant qua kênh thanh toán",
                    "Merchant",
                    "免充值",
                ],
                [
                    "`HONGBAO_CHANNEL_MCH_TOP_UP`",
                    "Red packet merchant cần top up",
                    "Platform",
                    "充值",
                ],
                [
                    "`CARD_PRE`",
                    "Thẻ trả trước merchant kênh thanh toán",
                    "N/A",
                    "支付通道商户预付卡",
                ],
                [
                    "`CARD_BALANCE`",
                    "Thẻ lưu trữ giá trị merchant",
                    "N/A",
                    "支付通道商户储值卡",
                ],
                ["`BANKCARD_CREDIT`", "Thẻ tín dụng", "N/A", "信用卡"],
                ["`BANKCARD_DEBIT`", "Thẻ ghi nợ", "N/A", "储蓄卡"],
                ["`WALLET_ALIPAY`", "Số dư ví Alipay", "N/A", "支付宝钱包余额"],
                ["`WALLET_ALIPAY_FINANCE`", "Yu'E Bao", "N/A", "余额宝"],
                ["`WALLET_WEIXIN`", "Số dư ví WeChat", "N/A", "微信钱包余额"],
                ["`ALIPAY_HUABEI`", "Alipay Huabei", "N/A", "花呗"],
                ["`ALIPAY_POINT`", "Alipay points", "N/A", "集分宝"],
            ],
        },
    ],
};

const responseTitleMap = {
    en: {
        "Response envelope": "Response envelope",
        "Precreate response data": "Precreate response data",
        "Pay / Query response data": "Pay / Query response data",
        "Business result codes": "Business result codes",
        "Request error codes": "Request error codes",
        "Business error codes": "Business error codes",
        "Order status": "Order status",
        "Transaction status": "Transaction status",
        "payment_list types": "payment_list types",
    },
    zh: {
        "Response envelope": "返回结构",
        "Precreate response data": "预下单返回字段",
        "Pay / Query response data": "支付 / 查询返回字段",
        "Business result codes": "业务结果码",
        "Request error codes": "请求错误码",
        "Business error codes": "业务错误码",
        "Order status": "订单状态",
        "Transaction status": "交易状态",
        "payment_list types": "payment_list 类型",
    },
};

function localizeResponseReference(lang) {
    return responseReference.vi.map((section) => {
        const columnsForLang =
            section.columns === columns.vi
                ? columns[lang]
                : section.columns === codeColumns.vi
                  ? codeColumns[lang]
                  : paymentListColumns[lang];

        return {
            ...section,
            title: responseTitleMap[lang][section.title] || section.title,
            columns: columnsForLang,
        };
    });
}

responseReference.en = localizeResponseReference("en");
responseReference.zh = localizeResponseReference("zh");

const pages = [
    {
        id: "overview",
        hideExample: true,
        view: "withQr",
        i18n: {
            vi: {
                nav: "Tổng quan",
                kicker: "LIT Merchant API",
                title: "Hướng dẫn tích hợp API QR thanh toán dynamic",
                lead: "Tài liệu hướng dẫn đối tác tích hợp API QR thanh toán động của LIT Merchant, bao gồm quy trình tạo đơn thanh toán, hiển thị mã QR và xác nhận kết quả giao dịch qua API Query hoặc Callback.",
                leadSecondary:
                    "Đối tác có nhu cầu tích hợp vui lòng liên hệ LIT để trở thành khách hàng liên kết, được phê duyệt sử dụng QR và nhận thông tin biến môi trường phục vụ tích hợp.",
                sections: [
                    {
                        type: "flow",
                        title: "Luồng tích hợp tổng quan",
                        items: [
                            "LIT Merchant cung cấp thông tin terminal cho từng đơn vị tích hợp, bao gồm 2 cặp `terminal_sn` / `terminal_key` để sử dụng theo cấu hình vận hành.",
                            "Hệ thống tích hợp gọi `POST /upay/v2/precreate` để tạo đơn thanh toán QR dynamic.",
                            "Ứng dụng hiển thị QR từ `biz_response.data.qr_code` trong frame LIT Merchant tại màn hình thanh toán.",
                            "Hệ thống dùng `POST /upay/v2/query` hoặc callback `notify_url` để cập nhật trạng thái giao dịch.",
                        ],
                    },
                    {
                        type: "notice",
                        style: "notice",
                        title: "Phạm vi hỗ trợ hiện tại",
                        text: "Tài liệu này áp dụng cho tích hợp QR thanh toán dynamic. Các nghiệp vụ [[blue:hoàn tiền]], [[blue:huỷ giao dịch]] và [[blue:điều chỉnh sau thanh toán]] [[wine:chưa khả dụng qua API]] ở giai đoạn hiện tại và cần xử lý theo quy trình vận hành của LIT Merchant.",
                    },
                ],
            },
            en: {
                nav: "Overview",
                kicker: "LIT Merchant API",
                title: "Dynamic payment QR API integration guide",
                lead: "This document guides partners through the LIT Merchant dynamic payment QR API. The integrated system creates a payment order through `precreate`, displays the QR inside the LIT Merchant frame, and confirms the result through `query` or callback.",
                leadSecondary:
                    "Partners who need integration should contact LIT to become linked customers, receive QR payment approval, and obtain environment information for implementation.",
                sections: [
                    {
                        type: "flow",
                        title: "Integration flow",
                        items: [
                            "LIT Merchant provides terminal credentials for each integration, including two `terminal_sn` / `terminal_key` pairs to use according to the agreed operations setup.",
                            "The integrated system calls `POST /upay/v2/precreate` to create a dynamic QR payment order.",
                            "The application displays the QR from `biz_response.data.qr_code` inside the LIT Merchant frame on the checkout screen.",
                            "The system uses `POST /upay/v2/query` or the `notify_url` callback to update transaction status.",
                        ],
                    },
                    {
                        type: "notice",
                        style: "notice",
                        title: "Current support scope",
                        text: "This document applies to dynamic payment QR integration. [[blue:Refund]], [[blue:cancellation]], and [[blue:post-payment adjustment]] operations are [[wine:not available through API]] at this stage and should be handled through LIT Merchant operations.",
                    },
                ],
            },
            zh: {
                nav: "概览",
                kicker: "LIT Merchant API",
                title: "动态支付二维码 API 接入指南",
                lead: "本文档说明合作方如何接入 LIT Merchant 动态支付二维码 API。接入系统通过 `precreate` 创建支付订单，在 LIT Merchant 框架内展示二维码，并通过 `query` 或回调确认支付结果。",
                leadSecondary:
                    "如需接入，请联系 LIT 成为合作客户，经审批开通二维码支付能力，并获取用于集成的环境信息。",
                sections: [
                    {
                        type: "flow",
                        title: "接入流程概览",
                        items: [
                            "LIT Merchant 为每个接入方提供终端信息，包括两组 `terminal_sn` / `terminal_key`，按约定的运营配置使用。",
                            "接入系统调用 `POST /upay/v2/precreate` 创建动态二维码支付订单。",
                            "应用在收银页面将 `biz_response.data.qr_code` 生成二维码，并展示在 LIT Merchant 框架内。",
                            "系统通过 `POST /upay/v2/query` 或 `notify_url` 回调更新交易状态。",
                        ],
                    },
                    {
                        type: "notice",
                        style: "notice",
                        title: "当前支持范围",
                        text: "本文档适用于动态支付二维码接入。[[blue:退款]]、[[blue:撤单]]、[[blue:支付后调整]]业务当前阶段[[wine:暂不通过 API 开放]]，如需处理应走 LIT Merchant 运营流程。",
                    },
                ],
            },
        },
    },
    {
        id: "api-guide",
        exampleKey: "sign",
        i18n: {
            vi: {
                nav: "API Request Headers",
                kicker: "Request headers",
                title: "API Request Headers và chữ ký MD5",
                lead: "LIT Merchant API nhận request dạng JSON UTF-8. Mỗi request cần chữ ký MD5 được tạo từ đúng chuỗi JSON body sẽ gửi lên API, nối với `terminal_key` tương ứng của terminal.",
                sections: [
                    {
                        type: "list",
                        title: "Thông tin kết nối",
                        items: [
                            ["Base URL", "`https://api.litnow.vn`"],
                            [
                                "Content-Type",
                                "`application/json` cho tất cả request.",
                            ],
                            ["Authorization", '`terminal_sn + " " + sign`.'],
                            [
                                "Terminal credentials",
                                "LIT Merchant cung cấp 2 cặp `terminal_sn` / `terminal_key` trong quy trình triển khai. Đối tác sử dụng đúng cặp credentials theo cấu hình được bàn giao.",
                            ],
                        ],
                    },

                    {
                        type: "flow",
                        title: "Tạo chuỗi chữ ký bảo mật",
                        items: [
                            "Serialize body thành chuỗi JSON UTF-8 chính xác như body sẽ gửi lên API. Whitespace và thứ tự key có thể làm chữ ký khác nhau.",
                            "Nối chuỗi body với `terminal_key`: `sign_input = body + terminal_key`.",
                            "Tính `sign = MD5(sign_input)` và lấy hex lowercase 32 ký tự.",
                            "Gửi header `Authorization: {terminal_sn} {sign}` và body không được thay đổi sau khi ký.",
                        ],
                    },
                    {
                        type: "notice",
                        style: "success",
                        title: "Test vector",
                        text: "Với body compact trong code example và key test `terminal_key_test_123456`, sign phải là `496e5b24a6cc9a6c52142223d40b5bb3`. Nếu khác, kiểm tra lại JSON serializer, encoding và whitespace.",
                    },
                ],
            },
            en: {
                nav: "API Request Headers",
                kicker: "Request headers",
                title: "API Request Headers and MD5 signing",
                lead: "LIT Merchant API accepts UTF-8 JSON requests. Each request must include an MD5 signature generated from the exact JSON body string sent to the API, concatenated with the terminal's `terminal_key`.",
                sections: [
                    {
                        type: "list",
                        title: "Connection details",
                        items: [
                            ["Base URL", "`https://api.litnow.vn`"],
                            [
                                "Content-Type",
                                "`application/json` for every request.",
                            ],
                            ["Authorization", '`terminal_sn + " " + sign`.'],
                            [
                                "Terminal credentials",
                                "LIT Merchant provides two `terminal_sn` / `terminal_key` pairs during implementation. Partners use the credential pair assigned in the delivered configuration.",
                            ],
                        ],
                    },

                    {
                        type: "flow",
                        title: "Signing steps",
                        items: [
                            "Serialize the body into the exact UTF-8 JSON string that will be sent to the API. Whitespace and key order can change the signature.",
                            "Append `terminal_key`: `sign_input = body + terminal_key`.",
                            "Calculate `sign = MD5(sign_input)` and use the 32-character lowercase hex digest.",
                            "Send `Authorization: {terminal_sn} {sign}` and do not mutate the body after signing.",
                        ],
                    },
                    {
                        type: "notice",
                        style: "success",
                        title: "Test vector",
                        text: "With the compact body in the code example and test key `terminal_key_test_123456`, the sign must be `496e5b24a6cc9a6c52142223d40b5bb3`. If not, check JSON serialization, encoding, and whitespace.",
                    },
                ],
            },
            zh: {
                nav: "API 请求头",
                kicker: "Request headers",
                title: "API 请求头与 MD5 签名",
                lead: "LIT Merchant API 接收 UTF-8 JSON 请求。每个请求都需要基于实际发送的 JSON body 字符串，加上对应终端的 `terminal_key` 后生成 MD5 签名。",
                sections: [
                    {
                        type: "list",
                        title: "连接信息",
                        items: [
                            ["请求域名", "`https://api.litnow.vn`"],
                            [
                                "Content-Type",
                                "所有请求均为 `application/json`。",
                            ],
                            ["Authorization", '`terminal_sn + " " + sign`。'],
                            [
                                "终端信息",
                                "LIT Merchant 在接入交付阶段提供两组 `terminal_sn` / `terminal_key`。合作方按交付配置使用对应的终端信息。",
                            ],
                        ],
                    },

                    {
                        type: "flow",
                        title: "签名方法",
                        items: [
                            "将 body 序列化为实际发送到 API 的 UTF-8 JSON 字符串。空格和 key 顺序变化都会导致签名不同。",
                            "拼接 `terminal_key`：`sign_input = body + terminal_key`。",
                            "计算 `sign = MD5(sign_input)`，使用 32 位小写十六进制摘要。",
                            "发送 `Authorization: {terminal_sn} {sign}`，签名后不要再修改 body。",
                        ],
                    },
                    {
                        type: "notice",
                        style: "success",
                        title: "签名校验样例",
                        text: "使用代码示例中的 compact body 和测试 key `terminal_key_test_123456` 时，sign 应为 `496e5b24a6cc9a6c52142223d40b5bb3`。如不一致，请检查 JSON 序列化、编码和空格。",
                    },
                ],
            },
        },
    },
    {
        id: "precreate",
        exampleKey: "precreate",
        view: "withQr",
        i18n: {
            vi: {
                nav: "Tạo QR",
                kicker: "POST /upay/v2/precreate",
                title: "Tạo QR thanh toán và hiển thị trong frame LIT Merchant",
                lead: "API precreate tạo một đơn thanh toán QR dynamic. Sau khi request thành công, hệ thống nhận `qr_code`, tạo ảnh QR và hiển thị trong frame LIT Merchant tại màn hình thanh toán.",
                sections: [
                    {
                        type: "endpoint",
                        title: "Endpoint",
                        method: "POST",
                        path: "/upay/v2/precreate",
                        text: "Gọi endpoint này để tạo đơn QR dynamic. Request body cần chứa các tham số bắt buộc bên dưới.",
                    },
                    {
                        type: "table",
                        title: "Request body bắt buộc",
                        columns: columns.vi,
                        rows: [
                            [
                                "`terminal_sn`",
                                "Y",
                                "String(32)",
                                "Mã terminal do LIT Merchant cấp.",
                            ],
                            [
                                "`client_sn`",
                                "Y",
                                "String(32)",
                                "Mã đơn hàng duy nhất trong hệ thống của đối tác.",
                            ],
                            [
                                "`total_amount`",
                                "Y",
                                "String(10)",
                                "Số tiền theo đơn vị nhỏ nhất của kênh thanh toán; gửi dạng chuỗi số.",
                            ],
                            [
                                "`payway`",
                                "Y",
                                "String",
                                "Giá trị cố định: `2001`.",
                            ],
                            [
                                "`sub_payway`",
                                "Y",
                                "String",
                                "Giá trị cố định: `2`, tương ứng 二维码支付 / QR payment.",
                            ],
                            [
                                "`subject`",
                                "Y",
                                "String(64)",
                                "Mô tả ngắn của giao dịch.",
                            ],
                            [
                                "`operator`",
                                "Y",
                                "String(32)",
                                "Nhân viên hoặc hệ thống tạo giao dịch.",
                            ],
                            [
                                "`extended.sqb_cent_flag`",
                                "Y",
                                "String",
                                'Bắt buộc gửi `"1"` trong object `extended`.',
                            ],
                            [
                                "`notify_url`",
                                "N",
                                "String(128)",
                                "Callback URL để nhận thông báo server-to-server.",
                            ],
                        ],
                    },
                    {
                        type: "notice",
                        style: "success",
                        title: "Hiển thị QR",
                        text: "API trả dữ liệu `qr_code`; ứng dụng tích hợp cần tạo ảnh QR từ dữ liệu này và đặt vào vùng trắng của frame LIT Merchant. Người mua hoàn tất thanh toán bằng cách quét QR trên màn hình.",
                    },
                    {
                        type: "notice",
                        style: "notice",
                        title: "Thời gian hiệu lực QR",
                        text: "QR thanh toán tạo từ API precreate có hiệu lực trong [[blue:4 phút]], tương đương [[blue:240 giây]]. Sau thời gian này, QR không còn giá trị thanh toán và hệ thống sẽ tự động huỷ đơn nếu giao dịch chưa được thanh toán. Nếu màn hình vẫn hiển thị QR cũ, khách hàng có thể quét hình ảnh QR nhưng giao dịch sẽ không được chấp nhận. API precreate không hỗ trợ tham số để thay đổi thời gian hiệu lực của QR; khi QR hết hạn, đối tác cần ngừng hiển thị QR cũ và tạo đơn thanh toán mới với `client_sn` mới.",
                    },
                    {
                        type: "notice",
                        style: "notice",
                        title: "Không tái sử dụng client_sn",
                        text: "`client_sn` là mã đơn duy nhất để đối soát. Khi tạo lại QR do hết hạn, huỷ hoặc người mua đổi phương thức thanh toán, đối tác cần dùng `client_sn` mới. Không dùng lại `client_sn` của QR cũ cho một lần thanh toán mới để tránh xung đột và sai lệch đối soát.",
                    },
                    {
                        type: "flow",
                        title: "Sau khi precreate thành công",
                        items: [
                            "Nếu `biz_response.result_code=PRECREATE_SUCCESS` hoặc `order_status=CREATED`, bắt đầu hiển thị QR cho người mua.",
                            "Gọi query mỗi 2 giây trong 30 giây đầu, sau đó mỗi 5 giây cho tới khi có trạng thái cuối.",
                            "Khi nhận callback thành công, phản hồi body `success` cho server và vẫn dùng query để đối soát trạng thái cuối cùng.",
                        ],
                    },
                ],
            },
            en: {
                nav: "Pre-create QR",
                kicker: "POST /upay/v2/precreate",
                title: "Create a payment QR and display it in the LIT Merchant frame",
                lead: "The precreate API creates a dynamic QR payment order. When the request succeeds, the system receives `qr_code`, generates a QR image, and displays it inside the LIT Merchant frame on the checkout screen.",
                sections: [
                    {
                        type: "endpoint",
                        title: "Endpoint",
                        method: "POST",
                        path: "/upay/v2/precreate",
                        text: "Call this endpoint to create a dynamic QR order. The request body must include the required parameters below.",
                    },
                    {
                        type: "table",
                        title: "Required request body",
                        columns: columns.en,
                        rows: [
                            [
                                "`terminal_sn`",
                                "Y",
                                "String(32)",
                                "Terminal serial number issued by LIT Merchant.",
                            ],
                            [
                                "`client_sn`",
                                "Y",
                                "String(32)",
                                "Unique partner order number.",
                            ],
                            [
                                "`total_amount`",
                                "Y",
                                "String(10)",
                                "Amount in the smallest channel unit; send as numeric string.",
                            ],
                            ["`payway`", "Y", "String", "Fixed value: `2001`."],
                            [
                                "`sub_payway`",
                                "Y",
                                "String",
                                "Fixed value: `2`, meaning 二维码支付 / QR payment.",
                            ],
                            [
                                "`subject`",
                                "Y",
                                "String(64)",
                                "Short transaction summary.",
                            ],
                            [
                                "`operator`",
                                "Y",
                                "String(32)",
                                "Cashier or system operator.",
                            ],
                            [
                                "`extended.sqb_cent_flag`",
                                "Y",
                                "String",
                                'Mandatory `"1"` inside `extended`.',
                            ],
                            [
                                "`notify_url`",
                                "N",
                                "String(128)",
                                "Server callback URL for payment notifications.",
                            ],
                        ],
                    },
                    {
                        type: "notice",
                        style: "success",
                        title: "Render the QR",
                        text: "The API returns `qr_code`; the integrated application generates a QR image from this value and places it in the white area of the LIT Merchant frame. The buyer completes payment by scanning the QR on screen.",
                    },
                    {
                        type: "notice",
                        style: "notice",
                        title: "QR validity",
                        text: "The payment QR created by the precreate API is valid for [[blue:4 minutes]], equal to [[blue:240 seconds]]. After this period, the QR is no longer valid for payment and the system automatically cancels the order if the transaction has not been paid. If the screen still displays the old QR image, the customer may scan it, but the transaction will not be accepted. The precreate API does not support a parameter for changing QR validity; when the QR expires, the partner must stop displaying the old QR and create a new payment order with a new `client_sn`.",
                    },
                    {
                        type: "notice",
                        style: "notice",
                        title: "Do not reuse client_sn",
                        text: "`client_sn` is the unique partner order number used for reconciliation. When recreating a QR because of expiry, cancellation, or a buyer payment-method change, use a new `client_sn`. Do not reuse the old QR's `client_sn` for a new payment attempt, to avoid conflicts and reconciliation mismatch.",
                    },
                    {
                        type: "flow",
                        title: "After successful pre-create",
                        items: [
                            "If `biz_response.result_code=PRECREATE_SUCCESS` or `order_status=CREATED`, show the QR to the buyer.",
                            "Poll query every 2 seconds for the first 30 seconds, then every 5 seconds until paid or expired.",
                            "When a success callback arrives, respond with body `success` and still use query as the final reconciliation source.",
                        ],
                    },
                ],
            },
            zh: {
                nav: "预下单 QR",
                kicker: "POST /upay/v2/precreate",
                title: "创建支付二维码并展示在 LIT Merchant 框架内",
                lead: "预下单接口用于创建动态二维码支付订单。请求成功后，系统获取 `qr_code`，生成二维码图片，并在收银页面展示到 LIT Merchant 框架内。",
                sections: [
                    {
                        type: "endpoint",
                        title: "接口",
                        method: "POST",
                        path: "/upay/v2/precreate",
                        text: "调用该接口创建动态二维码订单。请求 body 需包含以下必填参数。",
                    },
                    {
                        type: "table",
                        title: "请求参数说明",
                        columns: columns.zh,
                        rows: [
                            [
                                "`terminal_sn`",
                                "Y",
                                "String(32)",
                                "LIT Merchant 提供的终端ID。",
                            ],
                            [
                                "`client_sn`",
                                "Y",
                                "String(32)",
                                "合作方系统订单号，必须唯一。",
                            ],
                            [
                                "`total_amount`",
                                "Y",
                                "String(10)",
                                "交易总金额，使用支付通道最小金额单位，数字字符串。",
                            ],
                            ["`payway`", "Y", "String", "固定值：`2001`。"],
                            [
                                "`sub_payway`",
                                "Y",
                                "String",
                                "固定值：`2`，即 二维码支付。",
                            ],
                            ["`subject`", "Y", "String(64)", "交易简介。"],
                            [
                                "`operator`",
                                "Y",
                                "String(32)",
                                "门店操作员或系统操作员。",
                            ],
                            [
                                "`extended.sqb_cent_flag`",
                                "Y",
                                "String",
                                '`extended` 中必须传 `"1"`。',
                            ],
                            [
                                "`notify_url`",
                                "N",
                                "String(128)",
                                "用于接收支付通知的服务端回调地址。",
                            ],
                        ],
                    },
                    {
                        type: "notice",
                        style: "success",
                        title: "二维码展示",
                        text: "接口返回 `qr_code`；接入应用需要基于该值生成二维码图片，并放入 LIT Merchant 框架白色区域。买家通过扫描屏幕二维码完成支付。",
                    },
                    {
                        type: "notice",
                        style: "notice",
                        title: "二维码有效期",
                        text: "通过 precreate API 创建的支付二维码有效期为 [[blue:4 分钟]]，即 [[blue:240 秒]]。超过有效期后，该二维码不再具备支付效力；如交易尚未支付，系统会自动撤销订单。如果收银页面仍展示旧二维码，客户可能仍能扫描该图片，但交易不会被受理。precreate API 不支持通过请求参数修改二维码有效期；二维码过期后，合作方应停止展示旧二维码，并使用新的 `client_sn` 创建新的支付订单。",
                    },
                    {
                        type: "notice",
                        style: "notice",
                        title: "不要复用 client_sn",
                        text: "`client_sn` 是用于对账的合作方唯一订单号。因二维码过期、订单取消或买家更换支付方式而重新生成二维码时，应使用新的 `client_sn`。不要将旧二维码的 `client_sn` 用于新的支付尝试，以避免单号冲突和对账差异。",
                    },
                    {
                        type: "flow",
                        title: "预下单成功后",
                        items: [
                            "如果 `biz_response.result_code=PRECREATE_SUCCESS` 或 `order_status=CREATED`，即可向买家展示二维码。",
                            "前 30 秒建议每 2 秒查询一次，之后每 5 秒查询一次，直到支付成功或订单超时。",
                            "收到成功回调时，响应 body `success` 给服务器端，同时仍以查询接口作为最终对账依据。",
                        ],
                    },
                ],
            },
        },
    },
    {
        id: "pay",
        exampleKey: "pay",
        i18n: {
            vi: {
                nav: "Pay bằng máy quét",
                kicker: "POST /upay/v2/pay",
                title: "Quét QR của khách hàng bằng máy quét",
                lead: "API Pay dùng cho mô hình cashier quét QR/barcode thanh toán do khách hàng mở trên ví hoặc ứng dụng thanh toán. Flow này phù hợp khi POS tích hợp máy quét và có thể đọc trực tiếp nội dung mã vào trường `dynamic_id`.",
                sections: [
                    {
                        type: "endpoint",
                        title: "Endpoint",
                        method: "POST",
                        path: "/upay/v2/pay",
                        text: "Gọi endpoint này sau khi máy quét đọc được QR/barcode thanh toán của khách hàng và truyền giá trị đó vào `dynamic_id`.",
                    },
                    {
                        type: "table",
                        title: "Request body bắt buộc",
                        columns: columns.vi,
                        rows: [
                            [
                                "`terminal_sn`",
                                "Y",
                                "String(32)",
                                "Mã terminal do LIT Merchant cấp.",
                            ],
                            [
                                "`client_sn`",
                                "Y",
                                "String(32)",
                                "Mã giao dịch duy nhất trong hệ thống của đối tác. Mỗi lần retry tạo một `client_sn` mới.",
                            ],
                            [
                                "`total_amount`",
                                "Y",
                                "String(10)",
                                "Số tiền theo đơn vị nhỏ nhất của kênh thanh toán; gửi dạng chuỗi số.",
                            ],
                            [
                                "`dynamic_id`",
                                "Y",
                                "String(32)",
                                "Nội dung QR/barcode thanh toán do máy quét đọc từ màn hình của khách hàng.",
                            ],
                            [
                                "`subject`",
                                "Y",
                                "String(64)",
                                "Mô tả ngắn của giao dịch.",
                            ],
                            [
                                "`operator`",
                                "Y",
                                "String(32)",
                                "Nhân viên hoặc hệ thống tạo giao dịch.",
                            ],
                            [
                                "`notify_url`",
                                "N",
                                "String(128)",
                                "Callback URL để nhận thông báo server-to-server.",
                            ],
                        ],
                    },
                    {
                        type: "flow",
                        title: "Luồng xử lý đề xuất",
                        items: [
                            "Cashier nhập số tiền và POS tạo `client_sn` duy nhất.",
                            "Máy quét đọc QR/barcode thanh toán của khách hàng và đưa nội dung đọc được vào `dynamic_id`.",
                            "Hệ thống gọi `POST /upay/v2/pay` với body đã ký bằng `terminal_key`.",
                            "Nếu API trả trạng thái chưa cuối cùng, dùng `query` theo `sn` hoặc `client_sn` để xác nhận kết quả.",
                        ],
                    },
                    {
                        type: "notice",
                        style: "notice",
                        title: "Lưu ý vận hành",
                        text: "`dynamic_id` có thời hạn ngắn và có thể hết hạn. Nếu thanh toán thất bại hoặc timeout, hãy yêu cầu khách hàng mở lại mã thanh toán và tạo giao dịch mới với `client_sn` mới.",
                    },
                    {
                        type: "notice",
                        style: "danger",
                        title: "Kết quả chưa chắc chắn",
                        text: "Nếu Pay trả `PAY_IN_PROGRESS`, `PAY_FAIL_ERROR`, `PAY_ERROR`, `IN_PROG`, `ERROR_RECOVERY` hoặc nhóm lỗi protocol/IO, đối tác không tự kết luận giao dịch đã thành công hoặc thất bại. Giữ đơn ở trạng thái chờ đối soát, gọi Query bằng `sn` hoặc `client_sn`, và liên hệ LIT nếu trạng thái không chuyển về trạng thái cuối.",
                    },
                ],
            },
            en: {
                nav: "Scanner Pay",
                kicker: "POST /upay/v2/pay",
                title: "Scan the customer's QR with a scanner",
                lead: "The Pay API is used when the cashier scans a payment QR/barcode opened by the customer in a wallet or payment app. This flow is suitable for POS integrations that can read the scanned code directly into `dynamic_id`.",
                sections: [
                    {
                        type: "endpoint",
                        title: "Endpoint",
                        method: "POST",
                        path: "/upay/v2/pay",
                        text: "Call this endpoint after the scanner reads the customer's payment QR/barcode and sends that value as `dynamic_id`.",
                    },
                    {
                        type: "table",
                        title: "Required request body",
                        columns: columns.en,
                        rows: [
                            [
                                "`terminal_sn`",
                                "Y",
                                "String(32)",
                                "Terminal serial number issued by LIT Merchant.",
                            ],
                            [
                                "`client_sn`",
                                "Y",
                                "String(32)",
                                "Unique partner transaction number. Each retry must use a new `client_sn`.",
                            ],
                            [
                                "`total_amount`",
                                "Y",
                                "String(10)",
                                "Amount in the smallest channel unit; send as numeric string.",
                            ],
                            [
                                "`dynamic_id`",
                                "Y",
                                "String(32)",
                                "Payment QR/barcode content read by the scanner from the customer's screen.",
                            ],
                            [
                                "`subject`",
                                "Y",
                                "String(64)",
                                "Short transaction summary.",
                            ],
                            [
                                "`operator`",
                                "Y",
                                "String(32)",
                                "Cashier or system operator.",
                            ],
                            [
                                "`notify_url`",
                                "N",
                                "String(128)",
                                "Server callback URL for payment notifications.",
                            ],
                        ],
                    },
                    {
                        type: "flow",
                        title: "Recommended handling flow",
                        items: [
                            "The cashier enters the amount and the POS creates a unique `client_sn`.",
                            "The scanner reads the customer's payment QR/barcode and sends the scanned content as `dynamic_id`.",
                            "The system calls `POST /upay/v2/pay` with a body signed by `terminal_key`.",
                            "If the API returns a non-final status, use `query` by `sn` or `client_sn` to confirm the result.",
                        ],
                    },
                    {
                        type: "notice",
                        style: "notice",
                        title: "Operational note",
                        text: "`dynamic_id` is short-lived and can expire. If payment fails or times out, ask the customer to reopen the payment code and create a new transaction with a new `client_sn`.",
                    },
                    {
                        type: "notice",
                        style: "danger",
                        title: "Uncertain result",
                        text: "If Pay returns `PAY_IN_PROGRESS`, `PAY_FAIL_ERROR`, `PAY_ERROR`, `IN_PROG`, `ERROR_RECOVERY`, or protocol/IO error statuses, the partner must not decide that the transaction has succeeded or failed. Keep the order pending reconciliation, call Query by `sn` or `client_sn`, and contact LIT if the status does not move to a final state.",
                    },
                ],
            },
            zh: {
                nav: "扫码支付",
                kicker: "POST /upay/v2/pay",
                title: "使用扫码枪扫描客户付款码",
                lead: "Pay 接口适用于收银员使用扫码枪扫描客户在钱包或支付应用中打开的付款码。POS 可将扫码枪读取到的内容直接作为 `dynamic_id` 发起支付。",
                sections: [
                    {
                        type: "endpoint",
                        title: "接口",
                        method: "POST",
                        path: "/upay/v2/pay",
                        text: "扫码枪读取客户付款码后，将读取值作为 `dynamic_id` 调用该接口发起支付。",
                    },
                    {
                        type: "table",
                        title: "请求参数说明",
                        columns: columns.zh,
                        rows: [
                            [
                                "`terminal_sn`",
                                "Y",
                                "String(32)",
                                "LIT Merchant 提供的终端ID。",
                            ],
                            [
                                "`client_sn`",
                                "Y",
                                "String(32)",
                                "合作方系统交易号，必须唯一。每次重试需使用新的 `client_sn`。",
                            ],
                            [
                                "`total_amount`",
                                "Y",
                                "String(10)",
                                "交易总金额，使用支付通道最小金额单位，数字字符串。",
                            ],
                            [
                                "`dynamic_id`",
                                "Y",
                                "String(32)",
                                "扫码枪从客户屏幕读取到的付款码内容。",
                            ],
                            ["`subject`", "Y", "String(64)", "交易简介。"],
                            [
                                "`operator`",
                                "Y",
                                "String(32)",
                                "门店操作员或系统操作员。",
                            ],
                            [
                                "`notify_url`",
                                "N",
                                "String(128)",
                                "用于接收支付通知的服务端回调地址。",
                            ],
                        ],
                    },
                    {
                        type: "flow",
                        title: "建议处理流程",
                        items: [
                            "收银员输入金额，POS 生成唯一 `client_sn`。",
                            "扫码枪读取客户付款码，并将读取内容作为 `dynamic_id`。",
                            "系统使用 `terminal_key` 对 body 签名后调用 `POST /upay/v2/pay`。",
                            "如果接口返回非最终状态，通过 `sn` 或 `client_sn` 调用 `query` 确认结果。",
                        ],
                    },
                    {
                        type: "notice",
                        style: "notice",
                        title: "运营提示",
                        text: "`dynamic_id` 有较短有效期，可能过期。如支付失败或超时，请让客户重新打开付款码，并使用新的 `client_sn` 创建新交易。",
                    },
                    {
                        type: "notice",
                        style: "danger",
                        title: "结果不确定",
                        text: "如果 Pay 返回 `PAY_IN_PROGRESS`、`PAY_FAIL_ERROR`、`PAY_ERROR`、`IN_PROG`、`ERROR_RECOVERY` 或 protocol/IO 类错误，合作方不得自行判定交易成功或失败。应将订单保持为待对账状态，通过 `sn` 或 `client_sn` 调用查询接口；如状态未转为最终状态，请联系 LIT。",
                    },
                ],
            },
        },
    },
    {
        id: "query",
        exampleKey: "query",
        i18n: {
            vi: {
                nav: "Tra cứu giao dịch",
                kicker: "POST /upay/v2/query",
                title: "Chủ động lấy trạng thái giao dịch",
                lead: "API query dùng để kiểm tra trạng thái của đơn thanh toán sau khi tạo QR. Hệ thống có thể truy vấn bằng `sn` do LIT Merchant trả về hoặc bằng `client_sn` của đối tác.",
                sections: [
                    {
                        type: "endpoint",
                        title: "Endpoint",
                        method: "POST",
                        path: "/upay/v2/query",
                        text: "Gọi endpoint này để kiểm tra trạng thái cuối cùng của giao dịch bằng `sn` hoặc `client_sn`.",
                    },
                    {
                        type: "table",
                        title: "Request body",
                        columns: columns.vi,
                        rows: [
                            [
                                "`terminal_sn`",
                                "Y",
                                "String(32)",
                                "Terminal đang xử lý giao dịch.",
                            ],
                            [
                                "`sn`",
                                "N",
                                "String(16)",
                                "Mã giao dịch do LIT Merchant trả về trong precreate.",
                            ],
                            [
                                "`client_sn`",
                                "N",
                                "String(32)",
                                "Mã đơn hàng của đối tác. Bắt buộc có `sn` hoặc `client_sn`; nếu có cả hai, ưu tiên `sn`.",
                            ],
                        ],
                    },
                    {
                        type: "flow",
                        title: "Lịch polling đề xuất",
                        items: [
                            "Bắt đầu ngay sau khi precreate trả `PRECREATE_SUCCESS` hoặc `CREATED`.",
                            "Polling mỗi 2 giây trong 30 giây đầu để cập nhật POS nhanh.",
                            "Sau 30 giây, chuyển sang mỗi 5 giây cho tới khi nhận trạng thái cuối.",
                            "Khi nhận trạng thái cuối như thanh toán thành công, huỷ, hết hạn hoặc lỗi business cụ thể, hệ thống dừng polling và cập nhật đơn hàng.",
                        ],
                    },
                    {
                        type: "list",
                        title: "Quy tắc đóng đơn",
                        items: [
                            [
                                "Thanh toán thành công",
                                "Chỉ ghi nhận thành công khi Query trả `order_status=PAID` hoặc `status=SUCCESS`, đồng thời `sn`, `client_sn` và `total_amount` khớp với đơn hàng.",
                            ],
                            [
                                "Không thanh toán",
                                "Chỉ đóng đơn ở trạng thái không thanh toán khi Query trả trạng thái cuối như `PAY_CANCELED`, `CANCELED`, `ABORTED` hoặc lỗi hết hạn `TRADE_TIMEOUT`.",
                            ],
                            [
                                "Chờ đối soát",
                                "Không phát hàng và không đóng đơn khi response còn `CREATED`, `IN_PROG`, `ERROR_RECOVERY`, `PAY_ERROR`, `PAY_FAIL_ERROR` hoặc nhóm lỗi protocol/IO.",
                            ],
                        ],
                    },
                    {
                        type: "notice",
                        style: "danger",
                        title: "Trường hợp khách hàng thấy đã thanh toán nhưng POS chưa xác nhận",
                        text: "Nếu khách hàng báo đã thanh toán nhưng POS/ERP nhận trạng thái thất bại hoặc chưa rõ, không xác nhận thủ công khi chưa có kết quả Query cuối cùng. Nhân viên cần dùng chức năng Query để kiểm tra lại giao dịch; nếu Query vẫn không trả trạng thái cuối, giữ đơn ở trạng thái chờ đối soát và liên hệ LIT để xử lý.",
                    },
                    {
                        type: "notice",
                        style: "notice",
                        title: "Callback không thay thế query",
                        text: "Callback có thể đến trễ hoặc được gửi lại theo cơ chế retry. Hãy dùng query để xác nhận trạng thái cuối cùng trước khi đóng đơn trong POS/ERP.",
                    },
                ],
            },
            en: {
                nav: "Query",
                kicker: "POST /upay/v2/query",
                title: "Actively retrieve transaction status",
                lead: "The query API checks the status of a payment order after QR creation. The system can query by the LIT Merchant `sn` or by the partner `client_sn`.",
                sections: [
                    {
                        type: "endpoint",
                        title: "Endpoint",
                        method: "POST",
                        path: "/upay/v2/query",
                        text: "Call this endpoint to confirm the final transaction status by `sn` or `client_sn`.",
                    },
                    {
                        type: "table",
                        title: "Request body",
                        columns: columns.en,
                        rows: [
                            [
                                "`terminal_sn`",
                                "Y",
                                "String(32)",
                                "Terminal handling the transaction.",
                            ],
                            [
                                "`sn`",
                                "N",
                                "String(16)",
                                "LIT Merchant transaction number returned by pre-create.",
                            ],
                            [
                                "`client_sn`",
                                "N",
                                "String(32)",
                                "Partner order number. Either `sn` or `client_sn` is required; `sn` takes priority when both are present.",
                            ],
                        ],
                    },
                    {
                        type: "flow",
                        title: "Recommended polling schedule",
                        items: [
                            "Start immediately after pre-create returns `PRECREATE_SUCCESS` or `CREATED`.",
                            "Poll every 2 seconds for the first 30 seconds for a responsive POS UI.",
                            "After 30 seconds, poll every 5 seconds until a final status is received.",
                            "When a final state such as paid, canceled, expired, or a specific business error is received, stop polling and update the order.",
                        ],
                    },
                    {
                        type: "list",
                        title: "Order-closing rules",
                        items: [
                            [
                                "Payment accepted",
                                "Mark the order paid only when Query returns `order_status=PAID` or `status=SUCCESS`, and `sn`, `client_sn`, and `total_amount` match the order.",
                            ],
                            [
                                "No payment",
                                "Close the order as unpaid only when Query returns a final state such as `PAY_CANCELED`, `CANCELED`, `ABORTED`, or the expiry error `TRADE_TIMEOUT`.",
                            ],
                            [
                                "Pending reconciliation",
                                "Do not release goods or close the order while the response remains `CREATED`, `IN_PROG`, `ERROR_RECOVERY`, `PAY_ERROR`, `PAY_FAIL_ERROR`, or protocol/IO error statuses.",
                            ],
                        ],
                    },
                    {
                        type: "notice",
                        style: "danger",
                        title: "Customer sees paid but POS is not confirmed",
                        text: "If the customer reports a successful payment while POS/ERP receives a failed or unclear status, do not manually confirm the order without a final Query result. The cashier should run Query again; if Query still does not return a final state, keep the order pending reconciliation and contact LIT.",
                    },
                    {
                        type: "notice",
                        style: "notice",
                        title: "Callback does not replace query",
                        text: "Callbacks can be delayed or retried. Use query to confirm the final state before closing the order in POS/ERP.",
                    },
                ],
            },
            zh: {
                nav: "查询接口",
                kicker: "POST /upay/v2/query",
                title: "主动获取交易状态",
                lead: "查询接口用于在二维码创建后检查支付订单状态。系统可以通过 LIT Merchant 返回的 `sn` 或合作方系统的 `client_sn` 查询订单。",
                sections: [
                    {
                        type: "endpoint",
                        title: "接口",
                        method: "POST",
                        path: "/upay/v2/query",
                        text: "通过 `sn` 或 `client_sn` 调用该接口确认交易最终状态。",
                    },
                    {
                        type: "table",
                        title: "请求参数说明",
                        columns: columns.zh,
                        rows: [
                            [
                                "`terminal_sn`",
                                "Y",
                                "String(32)",
                                "处理该交易的终端ID。",
                            ],
                            [
                                "`sn`",
                                "N",
                                "String(16)",
                                "预下单返回的 LIT Merchant 交易号。",
                            ],
                            [
                                "`client_sn`",
                                "N",
                                "String(32)",
                                "合作方系统订单号。`sn` 与 `client_sn` 至少传一个；同时传时优先使用 `sn`。",
                            ],
                        ],
                    },
                    {
                        type: "flow",
                        title: "建议轮询规则",
                        items: [
                            "预下单返回 `PRECREATE_SUCCESS` 或 `CREATED` 后立即开始查询。",
                            "前 30 秒每 2 秒查询一次，保证收银端状态及时刷新。",
                            "30 秒后改为每 5 秒查询一次，直到获取最终状态。",
                            "收到支付成功、取消、超时或明确业务错误等最终状态后，停止轮询并更新订单。",
                        ],
                    },
                    {
                        type: "list",
                        title: "订单关闭规则",
                        items: [
                            [
                                "支付成功",
                                "仅当查询返回 `order_status=PAID` 或 `status=SUCCESS`，且 `sn`、`client_sn`、`total_amount` 与订单一致时，才可确认支付成功。",
                            ],
                            [
                                "未支付",
                                "仅当查询返回 `PAY_CANCELED`、`CANCELED`、`ABORTED` 或超时错误 `TRADE_TIMEOUT` 等最终状态时，才可关闭为未支付。",
                            ],
                            [
                                "待对账",
                                "当 response 仍为 `CREATED`、`IN_PROG`、`ERROR_RECOVERY`、`PAY_ERROR`、`PAY_FAIL_ERROR` 或 protocol/IO 类错误时，不应发货，也不应关闭订单。",
                            ],
                        ],
                    },
                    {
                        type: "notice",
                        style: "danger",
                        title: "客户显示已支付但 POS 未确认",
                        text: "如客户表示已支付成功，但 POS/ERP 收到失败或不明确状态，不应凭人工判断处理。收银员应再次使用查询接口核验；如查询仍未返回最终状态，应保持订单为待对账状态，并联系 LIT 处理。",
                    },
                    {
                        type: "notice",
                        style: "notice",
                        title: "回调不能替代查询",
                        text: "回调可能延迟或重试。POS/ERP 关闭订单前，应使用查询接口确认最终状态。",
                    },
                ],
            },
        },
    },
    {
        id: "post-payment-ops",
        exampleKey: "postPaymentUnavailable",
        i18n: {
            vi: {
                nav: "Hoàn/Huỷ giao dịch",
                kicker: "Refund / cancel / revoke",
                title: "Nghiệp vụ hoàn tiền và huỷ giao dịch",
                lead: "Các API dưới đây thuộc nhóm xử lý sau thanh toán. Ở giai đoạn hiện tại, đối tác không gọi các API này trực tiếp; mọi yêu cầu hoàn tiền hoặc điều chỉnh giao dịch cần thực hiện theo quy trình vận hành của LIT Merchant.",
                sections: [
                    {
                        type: "notice",
                        style: "danger",
                        title: "Chưa khả dụng qua API",
                        text: "`/upay/v2/refund`, `/upay/v2/cancel`, `/upay/v2/revoke` chưa được mở cho tích hợp khách hàng. Vui lòng không kích hoạt các thao tác này trên POS/ERP cho đến khi LIT Merchant có thông báo hỗ trợ chính thức.",
                    },
                    {
                        type: "notice",
                        style: "notice",
                        title: "Không tự suy luận quyền hoàn/huỷ từ response",
                        text: "Các mốc thời gian và điều kiện hoàn tiền, huỷ trong ngày hoặc điều chỉnh giao dịch được xác nhận theo quy trình vận hành của LIT. Khi nhóm API này chưa được mở, đối tác không tự xử lý hoàn/huỷ dựa trên trạng thái đơn hàng hoặc response API.",
                    },
                    {
                        type: "list",
                        title: "Mốc vận hành cần lưu ý",
                        items: [
                            [
                                "Hoàn tiền",
                                "Yêu cầu hoàn tiền được tiếp nhận trong vòng 3 tháng kể từ khi đơn thanh toán thành công, theo quy trình vận hành của LIT.",
                            ],
                            [
                                "撤单 / revoke",
                                "Chỉ áp dụng trong ngày thanh toán và do LIT xử lý qua kênh vận hành.",
                            ],
                            [
                                "冲正 / cancel",
                                "Dùng cho trường hợp trạng thái giao dịch chưa rõ hoặc có rủi ro sai lệch đối soát; đối tác cần chuyển yêu cầu cho LIT thay vì tự gọi API.",
                            ],
                        ],
                    },
                    {
                        type: "table",
                        title: "Endpoint nghiệp vụ",
                        columns: columns.vi,
                        rows: [
                            [
                                "`/upay/v2/refund`",
                                "N/A",
                                "POST",
                                "Hoàn tiền một phần/toàn phần. Chưa khả dụng qua API.",
                            ],
                            [
                                "`/upay/v2/cancel`",
                                "N/A",
                                "POST",
                                "冲正 / correction. Chưa khả dụng qua API.",
                            ],
                            [
                                "`/upay/v2/revoke`",
                                "N/A",
                                "POST",
                                "撤单 / revoke trong ngày. Chưa khả dụng qua API.",
                            ],
                        ],
                    },
                    {
                        type: "list",
                        title: "Khuyến nghị triển khai",
                        items: [
                            [
                                "POS/ERP",
                                "Không hiển thị hoặc không cho phép thao tác hoàn tiền/huỷ giao dịch bằng API.",
                            ],
                            [
                                "Error handling",
                                "Nếu người dùng nội bộ yêu cầu thao tác chưa hỗ trợ, hiển thị thông báo rõ ràng và hướng dẫn liên hệ bộ phận vận hành.",
                            ],
                            [
                                "Operations",
                                "Các yêu cầu hoàn tiền hoặc điều chỉnh giao dịch cần đi theo quy trình vận hành đã thống nhất với LIT Merchant.",
                            ],
                        ],
                    },
                ],
            },
            en: {
                nav: "Refund/Cancel",
                kicker: "Refund / cancel / revoke",
                title: "Refund and transaction cancellation operations",
                lead: "The APIs below belong to post-payment operations. At this stage, partners should not call these APIs directly; refund or adjustment requests must follow LIT Merchant operations.",
                sections: [
                    {
                        type: "notice",
                        style: "danger",
                        title: "Not available through API",
                        text: "`/upay/v2/refund`, `/upay/v2/cancel`, and `/upay/v2/revoke` are not enabled for customer integrations yet. Do not enable these actions in POS/ERP until LIT Merchant officially confirms support.",
                    },
                    {
                        type: "notice",
                        style: "notice",
                        title: "Do not infer refund/cancel eligibility from responses",
                        text: "Refund timing, same-day cancellation, and transaction adjustment conditions are confirmed through LIT operations. While these APIs are not enabled, partners must not process refunds or cancellations based only on order status or API responses.",
                    },
                    {
                        type: "list",
                        title: "Operational windows",
                        items: [
                            [
                                "Refund",
                                "Refund requests can be accepted within 3 months after the payment order is completed successfully, through the LIT operations process.",
                            ],
                            [
                                "撤单 / revoke",
                                "Applies only on the payment day and is handled by LIT through the operations channel.",
                            ],
                            [
                                "冲正 / cancel",
                                "Used when transaction status is unclear or reconciliation risk exists; partners should route the request to LIT instead of calling the API directly.",
                            ],
                        ],
                    },
                    {
                        type: "table",
                        title: "Operation endpoints",
                        columns: columns.en,
                        rows: [
                            [
                                "`/upay/v2/refund`",
                                "N/A",
                                "POST",
                                "Partial/full refund. Not available through API.",
                            ],
                            [
                                "`/upay/v2/cancel`",
                                "N/A",
                                "POST",
                                "冲正 / correction. Not available through API.",
                            ],
                            [
                                "`/upay/v2/revoke`",
                                "N/A",
                                "POST",
                                "撤单 / same-day revoke. Not available through API.",
                            ],
                        ],
                    },
                    {
                        type: "list",
                        title: "Implementation guidance",
                        items: [
                            [
                                "POS/ERP",
                                "Do not expose refund or cancellation actions through API controls.",
                            ],
                            [
                                "Error handling",
                                "If an internal user requests an unsupported operation, show a clear message and route the request to operations.",
                            ],
                            [
                                "Operations",
                                "Refund or transaction adjustment requests must follow the process agreed with LIT Merchant.",
                            ],
                        ],
                    },
                ],
            },
            zh: {
                nav: "退款/撤单",
                kicker: "退款 / 撤单 / 冲正",
                title: "退款与交易取消业务",
                lead: "以下接口属于支付后处理业务。当前阶段合作方不应直接调用这些 API；如需退款或交易调整，应按照 LIT Merchant 运营流程处理。",
                sections: [
                    {
                        type: "notice",
                        style: "danger",
                        title: "当前不通过 API 开放",
                        text: "`/upay/v2/refund`、`/upay/v2/cancel`、`/upay/v2/revoke` 尚未向客户集成开放。在 LIT Merchant 正式通知支持前，请勿在 POS/ERP 中启用这些操作。",
                    },
                    {
                        type: "notice",
                        style: "notice",
                        title: "不要根据 response 自行判断退款/撤销权限",
                        text: "退款时限、当日撤单和交易调整条件均以 LIT 运营流程确认为准。在该组 API 尚未开放时，合作方不得仅根据订单状态或 API response 自行处理退款或撤销。",
                    },
                    {
                        type: "list",
                        title: "运营时限说明",
                        items: [
                            [
                                "退款",
                                "支付订单成功完成后 3 个月内可受理退款请求，具体按 LIT 运营流程处理。",
                            ],
                            [
                                "撤单 / revoke",
                                "仅适用于支付当日，并由 LIT 通过运营渠道处理。",
                            ],
                            [
                                "冲正 / cancel",
                                "用于交易状态不明确或存在对账风险的场景；合作方应将请求转交 LIT 处理，而不是直接调用 API。",
                            ],
                        ],
                    },
                    {
                        type: "table",
                        title: "业务接口",
                        columns: columns.zh,
                        rows: [
                            [
                                "`/upay/v2/refund`",
                                "N/A",
                                "POST",
                                "退款接口，当前不通过 API 开放。",
                            ],
                            [
                                "`/upay/v2/cancel`",
                                "N/A",
                                "POST",
                                "冲正接口，当前不通过 API 开放。",
                            ],
                            [
                                "`/upay/v2/revoke`",
                                "N/A",
                                "POST",
                                "撤单接口，当前不通过 API 开放。",
                            ],
                        ],
                    },
                    {
                        type: "list",
                        title: "接入建议",
                        items: [
                            [
                                "POS/ERP",
                                "不要通过 API 控件开放退款或取消交易操作。",
                            ],
                            [
                                "错误处理",
                                "如果内部用户请求尚未支持的操作，应显示明确提示并引导至运营流程。",
                            ],
                            [
                                "运营流程",
                                "退款或交易调整需按与 LIT Merchant 约定的流程处理。",
                            ],
                        ],
                    },
                ],
            },
        },
    },
    {
        id: "examples",
        exampleKey: "precreate",
        i18n: {
            vi: {
                nav: "Ví dụ code",
                kicker: "Mẫu tích hợp",
                title: "Ví dụ tích hợp đa ngôn ngữ",
                lead: "Trang này tổng hợp các mẫu code cơ bản để tạo chữ ký, gửi request precreate và xử lý trạng thái giao dịch. Đối tác có thể dùng trực tiếp logic trong ngôn ngữ phù hợp với hệ thống của mình.",
                sections: [
                    {
                        type: "list",
                        title: "Nguyên tắc áp dụng cho mọi ngôn ngữ",
                        items: [
                            [
                                "Body",
                                "Tạo JSON body compact và không thay đổi body sau khi ký.",
                            ],
                            [
                                "Signature",
                                "Tính `MD5(body + terminal_key)` bằng UTF-8 và gửi lowercase hex.",
                            ],
                            [
                                "Header",
                                "Gửi `Authorization: terminal_sn sign` cùng `Content-Type: application/json`.",
                            ],
                            [
                                "Precreate",
                                "Luôn truyền `payway=2001`, `sub_payway=2`, `extended.sqb_cent_flag=1`.",
                            ],
                        ],
                    },
                    {
                        type: "sources",
                        title: "Repo demo tham chiếu",
                    },
                ],
            },
            en: {
                nav: "Code examples",
                kicker: "Integration samples",
                title: "Multi-language integration examples",
                lead: "This page summarizes basic code samples for signature generation, precreate requests, and transaction status handling. Partners can apply the same logic in the language used by their system.",
                sections: [
                    {
                        type: "list",
                        title: "Rules for every language",
                        items: [
                            [
                                "Body",
                                "Build a compact JSON body and do not change the body after signing.",
                            ],
                            [
                                "Signature",
                                "Calculate `MD5(body + terminal_key)` using UTF-8 and lowercase hex.",
                            ],
                            [
                                "Header",
                                "Send `Authorization: terminal_sn sign` with `Content-Type: application/json`.",
                            ],
                            [
                                "Precreate",
                                "Always include `payway=2001`, `sub_payway=2`, and `extended.sqb_cent_flag=1`.",
                            ],
                        ],
                    },
                    {
                        type: "sources",
                        title: "Reference demo repositories",
                    },
                ],
            },
            zh: {
                nav: "示例代码",
                kicker: "接入示例",
                title: "多语言接入示例",
                lead: "本页汇总签名生成、预下单请求和交易状态处理的基础代码示例。合作方可在自身系统使用的语言中应用相同逻辑。",
                sections: [
                    {
                        type: "list",
                        title: "所有语言通用规则",
                        items: [
                            [
                                "Body",
                                "构造 compact JSON body，签名后不要修改 body。",
                            ],
                            [
                                "签名",
                                "使用 UTF-8 计算 `MD5(body + terminal_key)`，结果为小写十六进制。",
                            ],
                            [
                                "请求头",
                                "发送 `Authorization: terminal_sn sign`，并设置 `Content-Type: application/json`。",
                            ],
                            [
                                "预下单",
                                "始终传 `payway=2001`、`sub_payway=2`、`extended.sqb_cent_flag=1`。",
                            ],
                        ],
                    },
                    {
                        type: "sources",
                        title: "参考 demo 仓库",
                    },
                ],
            },
        },
    },
    {
        id: "response-codes",
        exampleKey: "callback",
        i18n: {
            vi: {
                nav: "Mã phản hồi",
                kicker: "Response codes",
                title: "Mã phản hồi, trạng thái và callback",
                lead: "Các bảng dưới đây tóm tắt những mã phản hồi, trạng thái giao dịch, giá trị cố định và callback thường dùng trong flow QR thanh toán dynamic của LIT Merchant.",
                sections: [
                    {
                        type: "table",
                        title: "Giá trị cố định",
                        columns: columns.vi,
                        rows: [
                            [
                                "`payway`",
                                "Y",
                                "String",
                                "Giá trị cố định: `2001`.",
                            ],
                            [
                                "`sub_payway`",
                                "Y",
                                "String",
                                "`2` = 二维码支付 / QR payment.",
                            ],
                            ["`extended.sqb_cent_flag`", "Y", "String", "`1`."],
                            [
                                "`wap_pay_request`",
                                "N/A",
                                "String",
                                "Không áp dụng cho flow QR dynamic.",
                            ],
                        ],
                    },
                    ...responseReference.vi,
                    {
                        type: "notice",
                        style: "success",
                        title: "Callback",
                        text: "Khi nhận callback thành công, endpoint của đối tác phải phản hồi body `success`. Sau đó nên query lại bằng `sn` hoặc `client_sn` để đối soát trạng thái cuối cùng.",
                    },
                ],
            },
            en: {
                nav: "Response codes",
                kicker: "Response codes",
                title: "Response codes, statuses, and callback",
                lead: "The tables below summarize response codes, transaction statuses, fixed values, and callback handling used in the LIT Merchant dynamic payment QR flow.",
                sections: [
                    {
                        type: "table",
                        title: "Fixed values",
                        columns: columns.en,
                        rows: [
                            ["`payway`", "Y", "String", "Fixed value: `2001`."],
                            [
                                "`sub_payway`",
                                "Y",
                                "String",
                                "`2` = 二维码支付 / QR payment.",
                            ],
                            ["`extended.sqb_cent_flag`", "Y", "String", "`1`."],
                            [
                                "`wap_pay_request`",
                                "N/A",
                                "String",
                                "Not applicable to the dynamic QR flow.",
                            ],
                        ],
                    },
                    ...responseReference.en,
                    {
                        type: "notice",
                        style: "success",
                        title: "Callback",
                        text: "When a callback is accepted successfully, the partner endpoint must respond with body `success`. Then query again by `sn` or `client_sn` for final reconciliation.",
                    },
                ],
            },
            zh: {
                nav: "响应码",
                kicker: "响应码",
                title: "响应码、状态与回调说明",
                lead: "以下表格汇总 LIT Merchant 动态支付二维码流程中的响应码、交易状态、固定取值和回调处理方式。",
                sections: [
                    {
                        type: "table",
                        title: "固定取值",
                        columns: columns.zh,
                        rows: [
                            ["`payway`", "Y", "String", "固定值：`2001`。"],
                            [
                                "`sub_payway`",
                                "Y",
                                "String",
                                "`2` = 二维码支付。",
                            ],
                            [
                                "`extended.sqb_cent_flag`",
                                "Y",
                                "String",
                                "`1`。",
                            ],
                            [
                                "`wap_pay_request`",
                                "N/A",
                                "String",
                                "不适用于动态二维码流程。",
                            ],
                        ],
                    },
                    ...responseReference.zh,
                    {
                        type: "notice",
                        style: "success",
                        title: "回调",
                        text: "成功收到回调后，合作方 endpoint 需要响应 body `success`。随后建议再通过 `sn` 或 `client_sn` 查询进行最终对账。",
                    },
                ],
            },
        },
    },
];

const languageTabs = [
    ["python", "Python"],
    ["java", "Java"],
    ["csharp", "C#"],
    ["go", "Go"],
    ["javascript", "JavaScript"],
    ["php", "PHP"],
    ["ruby", "Ruby"],
    ["rust", "Rust"],
    ["cpp", "C/C++"],
];

const sourceRepos = [
    {
        name: "Python demo",
        url: "https://github.com/WoSai/shouqianba-webapi-pythondemo",
        note: {
            vi: "Repo demo gốc Shouqianba cho Python, gồm logic ký request và gọi transaction API.",
            en: "Original Shouqianba Python demo for request signing and transaction calls.",
            zh: "收钱吧 Python 原始 demo，包含请求签名与交易接口调用逻辑。",
        },
    },
    {
        name: "Java demo",
        url: "https://github.com/WoSai/shouqianba-webapi-javademo",
        note: {
            vi: "Repo demo gốc Shouqianba cho Java, có helper MD5 và HTTP request.",
            en: "Original Shouqianba Java demo with MD5 and HTTP request helpers.",
            zh: "收钱吧 Java 原始 demo，包含 MD5 与 HTTP 请求 helper。",
        },
    },
    {
        name: "C# demo",
        url: "https://github.com/WoSai/Shouqianba-mobile-payment-API-demo-CSharp",
        note: {
            vi: "Repo demo gốc Shouqianba cho C#, minh họa request giao dịch có chữ ký.",
            en: "Original Shouqianba C# demo showing signed transaction requests.",
            zh: "收钱吧 C# 原始 demo，展示带签名的交易请求。",
        },
    },
];

const githubLogo = `
  <svg class="github-logo" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.58 7.58 0 0 1 8 3.46c.68 0 1.36.09 2 .27 1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
  </svg>
`;

const sampleBody =
    '{"terminal_sn":"LITVN00000001","client_sn":"LIT202605150001","total_amount":"100000","payway":"2001","sub_payway":"2","subject":"LIT Merchant order","operator":"cashier01","extended":{"sqb_cent_flag":"1"}}';

const snippets = {
    sign: {
        python: `import hashlib
import json

terminal_sn = "LITVN00000001"
terminal_key = "terminal_key_test_123456"

payload = {
    "terminal_sn": terminal_sn,
    "client_sn": "LIT202605150001",
    "total_amount": "100000",
    "payway": "2001",
    "sub_payway": "2",
    "subject": "LIT Merchant order",
    "operator": "cashier01",
    "extended": {"sqb_cent_flag": "1"},
}

body = json.dumps(payload, separators=(",", ":"), ensure_ascii=False)
sign = hashlib.md5((body + terminal_key).encode("utf-8")).hexdigest()
headers = {
    "Content-Type": "application/json",
    "Authorization": f"{terminal_sn} {sign}",
}

print(body)
print(sign)  # 496e5b24a6cc9a6c52142223d40b5bb3 for the sample key`,
        java: `import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;

String terminalSn = "LITVN00000001";
String terminalKey = "terminal_key_test_123456";
String body = "${sampleBody.replace(/"/g, '\\"')}";

MessageDigest md5 = MessageDigest.getInstance("MD5");
byte[] digest = md5.digest((body + terminalKey).getBytes(StandardCharsets.UTF_8));
StringBuilder sign = new StringBuilder();
for (byte b : digest) {
    sign.append(String.format("%02x", b & 0xff));
}

String authorization = terminalSn + " " + sign;
System.out.println(authorization);`,
        csharp: `using System.Security.Cryptography;
using System.Text;

var terminalSn = "LITVN00000001";
var terminalKey = "terminal_key_test_123456";
var body = @"${sampleBody.replace(/"/g, '""')}";

using var md5 = MD5.Create();
var digest = md5.ComputeHash(Encoding.UTF8.GetBytes(body + terminalKey));
var sign = Convert.ToHexString(digest).ToLowerInvariant();

var request = new HttpRequestMessage(HttpMethod.Post, "https://api.litnow.vn/upay/v2/precreate");
request.Headers.TryAddWithoutValidation("Authorization", terminalSn + " " + sign);
request.Content = new StringContent(body, Encoding.UTF8, "application/json");`,
        go: `package main

import (
    "crypto/md5"
    "fmt"
)

func main() {
    terminalSn := "LITVN00000001"
    terminalKey := "terminal_key_test_123456"
    body := \`{"terminal_sn":"LITVN00000001","client_sn":"LIT202605150001","total_amount":"100000","payway":"2001","sub_payway":"2","subject":"LIT Merchant order","operator":"cashier01","extended":{"sqb_cent_flag":"1"}}\`
    sign := fmt.Sprintf("%x", md5.Sum([]byte(body+terminalKey)))
    authorization := terminalSn + " " + sign
    fmt.Println(authorization)
}`,
        javascript: `import crypto from "node:crypto";

const terminalSn = "LITVN00000001";
const terminalKey = "terminal_key_test_123456";

const body = JSON.stringify({
  terminal_sn: terminalSn,
  client_sn: "LIT202605150001",
  total_amount: "100000",
  payway: "2001",
  sub_payway: "2",
  subject: "LIT Merchant order",
  operator: "cashier01",
  extended: { sqb_cent_flag: "1" },
});

const sign = crypto.createHash("md5").update(body + terminalKey, "utf8").digest("hex");
const authorization = terminalSn + " " + sign;`,
        php: `<?php
$terminalSn = 'LITVN00000001';
$terminalKey = 'terminal_key_test_123456';

$payload = [
    'terminal_sn' => $terminalSn,
    'client_sn' => 'LIT202605150001',
    'total_amount' => '100000',
    'payway' => '2001',
    'sub_payway' => '2',
    'subject' => 'LIT Merchant order',
    'operator' => 'cashier01',
    'extended' => ['sqb_cent_flag' => '1'],
];

$body = json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
$sign = md5($body . $terminalKey);
$authorization = $terminalSn . ' ' . $sign;`,
        ruby: `require "digest"
require "json"

terminal_sn = "LITVN00000001"
terminal_key = "terminal_key_test_123456"

payload = {
  terminal_sn: terminal_sn,
  client_sn: "LIT202605150001",
  total_amount: "100000",
  payway: "2001",
  sub_payway: "2",
  subject: "LIT Merchant order",
  operator: "cashier01",
  extended: { sqb_cent_flag: "1" }
}

body = JSON.generate(payload)
sign = Digest::MD5.hexdigest(body + terminal_key)
authorization = "#{terminal_sn} #{sign}"`,
        rust: `use md5;
use serde_json::json;

fn main() {
    let terminal_sn = "LITVN00000001";
    let terminal_key = "terminal_key_test_123456";
    let payload = json!({
        "terminal_sn": terminal_sn,
        "client_sn": "LIT202605150001",
        "total_amount": "100000",
        "payway": "2001",
        "sub_payway": "2",
        "subject": "LIT Merchant order",
        "operator": "cashier01",
        "extended": {"sqb_cent_flag": "1"}
    });

    let body = serde_json::to_string(&payload).unwrap();
    let sign = format!("{:x}", md5::compute(format!("{}{}", body, terminal_key)));
    let authorization = format!("{} {}", terminal_sn, sign);
    println!("{}", authorization);
}`,
        cpp: `#include <iomanip>
#include <iostream>
#include <openssl/md5.h>
#include <sstream>
#include <string>

std::string md5_hex(const std::string& input) {
    unsigned char digest[MD5_DIGEST_LENGTH];
    MD5(reinterpret_cast<const unsigned char*>(input.data()), input.size(), digest);
    std::ostringstream out;
    for (unsigned char b : digest) out << std::hex << std::setw(2) << std::setfill('0') << (int)b;
    return out.str();
}

int main() {
    std::string terminal_sn = "LITVN00000001";
    std::string terminal_key = "terminal_key_test_123456";
    std::string body = R"(${sampleBody})";
    std::string sign = md5_hex(body + terminal_key);
    std::cout << terminal_sn << " " << sign << std::endl;
}`,
    },
    precreate: {
        python: `import hashlib
import json
import requests

BASE_URL = "https://api.litnow.vn"
terminal_sn = "LITVN00000001"
terminal_key = "replace_with_active_terminal_key"

payload = {
    "terminal_sn": terminal_sn,
    "client_sn": "LIT202605150001",
    "total_amount": "100000",
    "payway": "2001",
    "sub_payway": "2",
    "subject": "LIT Merchant order",
    "operator": "cashier01",
    "extended": {"sqb_cent_flag": "1"},
    "notify_url": "https://partner.example.com/lit/callback",
}
body = json.dumps(payload, separators=(",", ":"), ensure_ascii=False)
sign = hashlib.md5((body + terminal_key).encode("utf-8")).hexdigest()

resp = requests.post(
    BASE_URL + "/upay/v2/precreate",
    data=body.encode("utf-8"),
    headers={"Content-Type": "application/json", "Authorization": f"{terminal_sn} {sign}"},
    timeout=15,
)
data = resp.json()
qr_code = data["biz_response"]["data"]["qr_code"]`,
        java: `import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;

String terminalSn = "LITVN00000001";
String terminalKey = "replace_with_active_terminal_key";
String body = "{\\"terminal_sn\\":\\"" + terminalSn + "\\",\\"client_sn\\":\\"LIT202605150001\\",\\"total_amount\\":\\"100000\\",\\"payway\\":\\"2001\\",\\"sub_payway\\":\\"2\\",\\"subject\\":\\"LIT Merchant order\\",\\"operator\\":\\"cashier01\\",\\"extended\\":{\\"sqb_cent_flag\\":\\"1\\"}}";

MessageDigest md5 = MessageDigest.getInstance("MD5");
byte[] digest = md5.digest((body + terminalKey).getBytes(StandardCharsets.UTF_8));
StringBuilder sign = new StringBuilder();
for (byte b : digest) sign.append(String.format("%02x", b & 0xff));

HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.litnow.vn/upay/v2/precreate"))
    .header("Content-Type", "application/json")
    .header("Authorization", terminalSn + " " + sign)
    .POST(HttpRequest.BodyPublishers.ofString(body, StandardCharsets.UTF_8))
    .build();

HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());`,
        csharp: `using System.Net.Http;
using System.Security.Cryptography;
using System.Text;

var terminalSn = "LITVN00000001";
var terminalKey = "replace_with_active_terminal_key";
var body = @"{""terminal_sn"":""LITVN00000001"",""client_sn"":""LIT202605150001"",""total_amount"":""100000"",""payway"":""2001"",""sub_payway"":""2"",""subject"":""LIT Merchant order"",""operator"":""cashier01"",""extended"":{""sqb_cent_flag"":""1""}}";

using var md5 = MD5.Create();
var digest = md5.ComputeHash(Encoding.UTF8.GetBytes(body + terminalKey));
var sign = Convert.ToHexString(digest).ToLowerInvariant();

using var client = new HttpClient();
using var request = new HttpRequestMessage(HttpMethod.Post, "https://api.litnow.vn/upay/v2/precreate");
request.Headers.TryAddWithoutValidation("Authorization", terminalSn + " " + sign);
request.Content = new StringContent(body, Encoding.UTF8, "application/json");

var response = await client.SendAsync(request);
var json = await response.Content.ReadAsStringAsync();`,
        go: `package main

import (
    "crypto/md5"
    "fmt"
    "io"
    "net/http"
    "strings"
)

func main() {
    terminalSn := "LITVN00000001"
    terminalKey := "replace_with_active_terminal_key"
    body := \`{"terminal_sn":"LITVN00000001","client_sn":"LIT202605150001","total_amount":"100000","payway":"2001","sub_payway":"2","subject":"LIT Merchant order","operator":"cashier01","extended":{"sqb_cent_flag":"1"}}\`
    sign := fmt.Sprintf("%x", md5.Sum([]byte(body+terminalKey)))

    req, _ := http.NewRequest("POST", "https://api.litnow.vn/upay/v2/precreate", strings.NewReader(body))
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", terminalSn+" "+sign)
    resp, err := http.DefaultClient.Do(req)
    if err != nil {
        panic(err)
    }
    defer resp.Body.Close()

    respBody, _ := io.ReadAll(resp.Body)
    fmt.Println(string(respBody))
}`,
        javascript: `import crypto from "node:crypto";

const terminalSn = "LITVN00000001";
const terminalKey = "replace_with_active_terminal_key";

const body = JSON.stringify({
  terminal_sn: terminalSn,
  client_sn: "LIT202605150001",
  total_amount: "100000",
  payway: "2001",
  sub_payway: "2",
  subject: "LIT Merchant order",
  operator: "cashier01",
  extended: { sqb_cent_flag: "1" },
  notify_url: "https://partner.example.com/lit/callback",
});

const sign = crypto.createHash("md5").update(body + terminalKey, "utf8").digest("hex");
const response = await fetch("https://api.litnow.vn/upay/v2/precreate", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: terminalSn + " " + sign,
  },
  body,
});
const data = await response.json();
const qrCode = data.biz_response.data.qr_code;`,
        php: `<?php
$terminalSn = 'LITVN00000001';
$terminalKey = 'replace_with_active_terminal_key';
$payload = [
    'terminal_sn' => $terminalSn,
    'client_sn' => 'LIT202605150001',
    'total_amount' => '100000',
    'payway' => '2001',
    'sub_payway' => '2',
    'subject' => 'LIT Merchant order',
    'operator' => 'cashier01',
    'extended' => ['sqb_cent_flag' => '1'],
];
$body = json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
$sign = md5($body . $terminalKey);

$ch = curl_init('https://api.litnow.vn/upay/v2/precreate');
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $body,
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json',
        'Authorization: ' . $terminalSn . ' ' . $sign,
    ],
    CURLOPT_RETURNTRANSFER => true,
]);
$json = curl_exec($ch);`,
        ruby: `require "digest"
require "json"
require "net/http"

terminal_sn = "LITVN00000001"
terminal_key = "replace_with_active_terminal_key"
body = JSON.generate({
  terminal_sn: terminal_sn,
  client_sn: "LIT202605150001",
  total_amount: "100000",
  payway: "2001",
  sub_payway: "2",
  subject: "LIT Merchant order",
  operator: "cashier01",
  extended: { sqb_cent_flag: "1" }
})
sign = Digest::MD5.hexdigest(body + terminal_key)

uri = URI("https://api.litnow.vn/upay/v2/precreate")
req = Net::HTTP::Post.new(uri)
req["Content-Type"] = "application/json"
req["Authorization"] = "#{terminal_sn} #{sign}"
req.body = body
res = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) { |http| http.request(req) }`,
        rust: `use reqwest::blocking::Client;
use serde_json::json;

let terminal_sn = "LITVN00000001";
let terminal_key = "replace_with_active_terminal_key";
let payload = json!({
    "terminal_sn": terminal_sn,
    "client_sn": "LIT202605150001",
    "total_amount": "100000",
    "payway": "2001",
    "sub_payway": "2",
    "subject": "LIT Merchant order",
    "operator": "cashier01",
    "extended": {"sqb_cent_flag": "1"}
});
let body = serde_json::to_string(&payload)?;
let sign = format!("{:x}", md5::compute(format!("{}{}", body, terminal_key)));

let response = Client::new()
    .post("https://api.litnow.vn/upay/v2/precreate")
    .header("Content-Type", "application/json")
    .header("Authorization", format!("{} {}", terminal_sn, sign))
    .body(body)
    .send()?;`,
        cpp: `// C++ example using libcurl, OpenSSL MD5, and nlohmann::ordered_json.
nlohmann::ordered_json payload = {
  {"terminal_sn", "LITVN00000001"},
  {"client_sn", "LIT202605150001"},
  {"total_amount", "100000"},
  {"payway", "2001"},
  {"sub_payway", "2"},
  {"subject", "LIT Merchant order"},
  {"operator", "cashier01"},
  {"extended", {{"sqb_cent_flag", "1"}}}
};
std::string body = payload.dump();
std::string sign = md5_hex(body + "replace_with_active_terminal_key");
std::string authorization = "Authorization: LITVN00000001 " + sign;

curl_easy_setopt(curl, CURLOPT_URL, "https://api.litnow.vn/upay/v2/precreate");
curl_easy_setopt(curl, CURLOPT_POSTFIELDS, body.c_str());
headers = curl_slist_append(headers, "Content-Type: application/json");
headers = curl_slist_append(headers, authorization.c_str());
curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
curl_easy_perform(curl);`,
    },
    pay: {
        python: `payload = {
    "terminal_sn": terminal_sn,
    "client_sn": "LITPAY202605150001",
    "total_amount": "100000",
    "dynamic_id": scanned_payment_code,
    "subject": "LIT Merchant scanner payment",
    "operator": "cashier01",
}
body = json.dumps(payload, separators=(",", ":"), ensure_ascii=False)
sign = hashlib.md5((body + terminal_key).encode("utf-8")).hexdigest()
response = requests.post(
    "https://api.litnow.vn/upay/v2/pay",
    data=body.encode("utf-8"),
    headers={"Content-Type": "application/json", "Authorization": f"{terminal_sn} {sign}"},
    timeout=15,
)`,
        java: `String body = "{"
    + "\\"terminal_sn\\":\\"LITVN00000001\\","
    + "\\"client_sn\\":\\"LITPAY202605150001\\","
    + "\\"total_amount\\":\\"100000\\","
    + "\\"dynamic_id\\":\\"" + scannedPaymentCode + "\\","
    + "\\"subject\\":\\"LIT Merchant scanner payment\\","
    + "\\"operator\\":\\"cashier01\\""
    + "}";
String sign = md5Hex(body + terminalKey);
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.litnow.vn/upay/v2/pay"))
    .header("Content-Type", "application/json")
    .header("Authorization", terminalSn + " " + sign)
    .POST(HttpRequest.BodyPublishers.ofString(body, StandardCharsets.UTF_8))
    .build();`,
        csharp: `var payload = new {
    terminal_sn = terminalSn,
    client_sn = "LITPAY202605150001",
    total_amount = "100000",
    dynamic_id = scannedPaymentCode,
    subject = "LIT Merchant scanner payment",
    @operator = "cashier01"
};
var body = JsonSerializer.Serialize(payload);
var sign = Md5Hex(body + terminalKey);
using var request = new HttpRequestMessage(HttpMethod.Post, "https://api.litnow.vn/upay/v2/pay");
request.Headers.TryAddWithoutValidation("Authorization", terminalSn + " " + sign);
request.Content = new StringContent(body, Encoding.UTF8, "application/json");`,
        go: `package main

import (
    "crypto/md5"
    "fmt"
    "io"
    "net/http"
    "strings"
)

func main() {
    terminalSn := "LITVN00000001"
    terminalKey := "replace_with_active_terminal_key"
    body := \`{"terminal_sn":"LITVN00000001","client_sn":"LITPAY202605150001","total_amount":"100000","dynamic_id":"SCANNED_PAYMENT_CODE","subject":"LIT Merchant scanner payment","operator":"cashier01"}\`
    sign := fmt.Sprintf("%x", md5.Sum([]byte(body+terminalKey)))

    req, _ := http.NewRequest("POST", "https://api.litnow.vn/upay/v2/pay", strings.NewReader(body))
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", terminalSn+" "+sign)
    resp, err := http.DefaultClient.Do(req)
    if err != nil {
        panic(err)
    }
    defer resp.Body.Close()

    respBody, _ := io.ReadAll(resp.Body)
    fmt.Println(string(respBody))
}`,
        javascript: `const body = JSON.stringify({
  terminal_sn: terminalSn,
  client_sn: "LITPAY202605150001",
  total_amount: "100000",
  dynamic_id: scannedPaymentCode,
  subject: "LIT Merchant scanner payment",
  operator: "cashier01",
});
const sign = crypto.createHash("md5").update(body + terminalKey, "utf8").digest("hex");
await fetch("https://api.litnow.vn/upay/v2/pay", {
  method: "POST",
  headers: { "Content-Type": "application/json", Authorization: terminalSn + " " + sign },
  body,
});`,
        php: `<?php
$payload = [
    'terminal_sn' => $terminalSn,
    'client_sn' => 'LITPAY202605150001',
    'total_amount' => '100000',
    'dynamic_id' => $scannedPaymentCode,
    'subject' => 'LIT Merchant scanner payment',
    'operator' => 'cashier01',
];
$body = json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
$sign = md5($body . $terminalKey);
// POST $body to https://api.litnow.vn/upay/v2/pay with Authorization header.`,
        ruby: `body = JSON.generate(
  terminal_sn: terminal_sn,
  client_sn: "LITPAY202605150001",
  total_amount: "100000",
  dynamic_id: scanned_payment_code,
  subject: "LIT Merchant scanner payment",
  operator: "cashier01"
)
sign = Digest::MD5.hexdigest(body + terminal_key)
req = Net::HTTP::Post.new(URI("https://api.litnow.vn/upay/v2/pay"))
req["Content-Type"] = "application/json"
req["Authorization"] = "#{terminal_sn} #{sign}"
req.body = body`,
        rust: `let payload = json!({
    "terminal_sn": terminal_sn,
    "client_sn": "LITPAY202605150001",
    "total_amount": "100000",
    "dynamic_id": scanned_payment_code,
    "subject": "LIT Merchant scanner payment",
    "operator": "cashier01"
});
let body = serde_json::to_string(&payload)?;
let sign = format!("{:x}", md5::compute(format!("{}{}", body, terminal_key)));
client.post("https://api.litnow.vn/upay/v2/pay")
    .header("Content-Type", "application/json")
    .header("Authorization", format!("{} {}", terminal_sn, sign))
    .body(body)
    .send()?;`,
        cpp: `nlohmann::ordered_json payload = {
  {"terminal_sn", "LITVN00000001"},
  {"client_sn", "LITPAY202605150001"},
  {"total_amount", "100000"},
  {"dynamic_id", scanned_payment_code},
  {"subject", "LIT Merchant scanner payment"},
  {"operator", "cashier01"}
};
std::string body = payload.dump();
std::string sign = md5_hex(body + terminal_key);
std::string authorization = "Authorization: LITVN00000001 " + sign;
// POST to https://api.litnow.vn/upay/v2/pay with Content-Type: application/json`,
    },
    query: {
        python: `payload = {
    "terminal_sn": "LITVN00000001",
    "sn": "7894259244096169",
}
body = json.dumps(payload, separators=(",", ":"), ensure_ascii=False)
sign = hashlib.md5((body + terminal_key).encode("utf-8")).hexdigest()
response = requests.post(
    "https://api.litnow.vn/upay/v2/query",
    data=body.encode("utf-8"),
    headers={"Content-Type": "application/json", "Authorization": f"{terminal_sn} {sign}"},
    timeout=15,
)
order = response.json()["biz_response"]["data"]
if order["order_status"] == "PAID":
    mark_order_paid(order["sn"])`,
        java: `String body = "{\\"terminal_sn\\":\\"LITVN00000001\\",\\"sn\\":\\"7894259244096169\\"}";
String sign = md5Hex(body + terminalKey);
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.litnow.vn/upay/v2/query"))
    .header("Content-Type", "application/json")
    .header("Authorization", terminalSn + " " + sign)
    .POST(HttpRequest.BodyPublishers.ofString(body, StandardCharsets.UTF_8))
    .build();
HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());`,
        csharp: `var body = @"{""terminal_sn"":""LITVN00000001"",""sn"":""7894259244096169""}";
var sign = Md5Hex(body + terminalKey);
using var request = new HttpRequestMessage(HttpMethod.Post, "https://api.litnow.vn/upay/v2/query");
request.Headers.TryAddWithoutValidation("Authorization", terminalSn + " " + sign);
request.Content = new StringContent(body, Encoding.UTF8, "application/json");
var response = await client.SendAsync(request);`,
        go: `package main

import (
    "crypto/md5"
    "fmt"
    "io"
    "net/http"
    "strings"
)

func main() {
    terminalSn := "LITVN00000001"
    terminalKey := "replace_with_active_terminal_key"
    body := \`{"terminal_sn":"LITVN00000001","sn":"7894259244096169"}\`
    sign := fmt.Sprintf("%x", md5.Sum([]byte(body+terminalKey)))

    req, _ := http.NewRequest("POST", "https://api.litnow.vn/upay/v2/query", strings.NewReader(body))
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", terminalSn+" "+sign)
    resp, err := http.DefaultClient.Do(req)
    if err != nil {
        panic(err)
    }
    defer resp.Body.Close()

    respBody, _ := io.ReadAll(resp.Body)
    fmt.Println(string(respBody))
}`,
        javascript: `const body = JSON.stringify({
  terminal_sn: terminalSn,
  sn: "7894259244096169",
});
const sign = crypto.createHash("md5").update(body + terminalKey, "utf8").digest("hex");
const response = await fetch("https://api.litnow.vn/upay/v2/query", {
  method: "POST",
  headers: { "Content-Type": "application/json", Authorization: terminalSn + " " + sign },
  body,
});
const data = await response.json();`,
        php: `<?php
$payload = ['terminal_sn' => $terminalSn, 'sn' => '7894259244096169'];
$body = json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
$sign = md5($body . $terminalKey);
// POST $body to https://api.litnow.vn/upay/v2/query with Authorization header.`,
        ruby: `body = JSON.generate(terminal_sn: terminal_sn, sn: "7894259244096169")
sign = Digest::MD5.hexdigest(body + terminal_key)
req = Net::HTTP::Post.new(URI("https://api.litnow.vn/upay/v2/query"))
req["Content-Type"] = "application/json"
req["Authorization"] = "#{terminal_sn} #{sign}"
req.body = body`,
        rust: `let payload = json!({"terminal_sn": terminal_sn, "sn": "7894259244096169"});
let body = serde_json::to_string(&payload)?;
let sign = format!("{:x}", md5::compute(format!("{}{}", body, terminal_key)));
let response = client
    .post("https://api.litnow.vn/upay/v2/query")
    .header("Content-Type", "application/json")
    .header("Authorization", format!("{} {}", terminal_sn, sign))
    .body(body)
    .send()?;`,
        cpp: `nlohmann::ordered_json payload = {
  {"terminal_sn", "LITVN00000001"},
  {"sn", "7894259244096169"}
};
std::string body = payload.dump();
std::string sign = md5_hex(body + terminal_key);
// POST to https://api.litnow.vn/upay/v2/query with Authorization: terminal_sn + " " + sign`,
    },
    postPaymentUnavailable: {
        python: `def refund(*_args, **_kwargs):
    raise RuntimeError("LIT Merchant post-payment API is not available for this integration. Contact LIT Merchant operations.")

# Keep this guard before any code path can call /upay/v2/refund, /cancel, or /revoke.`,
        java: `public String refund() {
    throw new UnsupportedOperationException(
        "LIT Merchant post-payment API is not available for this integration. Contact LIT Merchant operations."
    );
}`,
        csharp: `public Task RefundAsync() {
    throw new NotSupportedException(
        "LIT Merchant post-payment API is not available for this integration. Contact LIT Merchant operations."
    );
}`,
        go: `func Refund() error {
    return errors.New("LIT Merchant post-payment API is not available for this integration. Contact LIT Merchant operations.")
}`,
        javascript: `export async function refund() {
  throw new Error("LIT Merchant post-payment API is not available for this integration. Contact LIT Merchant operations.");
}`,
        php: `<?php
function refund() {
    throw new RuntimeException('LIT Merchant post-payment API is not available for this integration. Contact LIT Merchant operations.');
}`,
        ruby: `def refund(*)
  raise "LIT Merchant post-payment API is not available for this integration. Contact LIT Merchant operations."
end`,
        rust: `fn refund() -> Result<(), String> {
    Err("LIT Merchant post-payment API is not available for this integration. Contact LIT Merchant operations.".to_string())
}`,
        cpp: `void refund() {
    throw std::runtime_error("LIT Merchant post-payment API is not available for this integration. Contact LIT Merchant operations.");
}`,
    },
    callback: {
        python: `from flask import Flask, request

app = Flask(__name__)

@app.post("/lit/callback")
def lit_callback():
    payload = request.get_json(force=True)
    # Store callback payload, then query LIT Merchant by sn/client_sn for final reconciliation.
    enqueue_reconciliation(payload["biz_response"]["data"]["sn"])
    return "success", 200, {"Content-Type": "text/plain; charset=utf-8"}`,
        java: `@PostMapping("/lit/callback")
public ResponseEntity<String> callback(@RequestBody Map<String, Object> payload) {
    // Store payload, then query LIT Merchant by sn/client_sn for final reconciliation.
    reconciliationQueue.add(payload);
    return ResponseEntity.ok("success");
}`,
        csharp: `[HttpPost("/lit/callback")]
public IActionResult Callback([FromBody] JsonElement payload)
{
    // Store payload, then query LIT Merchant by sn/client_sn for final reconciliation.
    _queue.Enqueue(payload);
    return Content("success", "text/plain", Encoding.UTF8);
}`,
        go: `func litCallback(w http.ResponseWriter, r *http.Request) {
    defer r.Body.Close()
    payload, _ := io.ReadAll(r.Body)
    enqueueReconciliation(payload)
    w.Header().Set("Content-Type", "text/plain; charset=utf-8")
    w.Write([]byte("success"))
}`,
        javascript: `app.post("/lit/callback", express.json(), async (req, res) => {
  // Store payload, then query LIT Merchant by sn/client_sn for final reconciliation.
  await reconciliationQueue.add(req.body);
  res.type("text/plain").send("success");
});`,
        php: `<?php
$payload = json_decode(file_get_contents('php://input'), true);
// Store payload, then query LIT Merchant by sn/client_sn for final reconciliation.
enqueue_reconciliation($payload['biz_response']['data']['sn']);
header('Content-Type: text/plain; charset=utf-8');
echo 'success';`,
        ruby: `post "/lit/callback" do
  payload = JSON.parse(request.body.read)
  # Store payload, then query LIT Merchant by sn/client_sn for final reconciliation.
  enqueue_reconciliation(payload.dig("biz_response", "data", "sn"))
  content_type "text/plain"
  "success"
end`,
        rust: `async fn callback(Json(payload): Json<serde_json::Value>) -> &'static str {
    // Store payload, then query LIT Merchant by sn/client_sn for final reconciliation.
    enqueue_reconciliation(payload);
    "success"
}`,
        cpp: `// Pseudocode for a C++ HTTP handler.
HttpResponse lit_callback(const HttpRequest& request) {
    auto payload = nlohmann::json::parse(request.body());
    enqueue_reconciliation(payload["biz_response"]["data"]["sn"]);
    return HttpResponse::text("success", 200);
}`,
    },
};

const state = {
    lang: ["vi", "en", "zh"].includes(localStorage.getItem("lit-doc-lang"))
        ? localStorage.getItem("lit-doc-lang")
        : "vi",
};

const SCROLL_STORAGE_KEY = "lit-doc-page-scroll";
const routeAliases = {
    appendix: "response-codes",
};
const pageScrollPositions = (() => {
    try {
        return JSON.parse(sessionStorage.getItem(SCROLL_STORAGE_KEY)) || {};
    } catch {
        return {};
    }
})();
let activePageId = null;

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function inline(value) {
    return escapeHtml(value)
        .replace(/\[\[blue:(.*?)\]\]/g, '<span class="text-blue">$1</span>')
        .replace(/\[\[wine:(.*?)\]\]/g, '<span class="text-wine">$1</span>')
        .replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');
}

function normalizePageId(pageId) {
    return routeAliases[pageId] || pageId;
}

function currentPage() {
    const id = normalizePageId(
        window.location.hash.replace("#", "") || "overview",
    );
    return pages.find((page) => page.id === id) || pages[0];
}

function persistScrollPositions() {
    try {
        sessionStorage.setItem(
            SCROLL_STORAGE_KEY,
            JSON.stringify(pageScrollPositions),
        );
    } catch {
        // Ignore storage failures; in-memory restoration still works.
    }
}

function getScrollTop() {
    return document.scrollingElement?.scrollTop ?? window.scrollY ?? 0;
}

function savePageScrollPosition(pageId) {
    if (!pageId) return;
    pageScrollPositions[pageId] = getScrollTop();
    persistScrollPositions();
}

function restorePageScrollPosition(pageId) {
    const y = Number(pageScrollPositions[pageId] || 0);
    const scroller = document.scrollingElement || document.documentElement;
    scroller.scrollTop = y;
    document.documentElement.scrollTop = y;
    document.body.scrollTop = y;
}

function renderCurrentRoute() {
    const nextPageId = currentPage().id;
    if (nextPageId === activePageId) return;

    savePageScrollPosition(activePageId);
    renderPage();
    document.getElementById("docRoot").focus({ preventScroll: true });
    activePageId = nextPageId;
    restorePageScrollPosition(activePageId);
}

function navigateToPage(pageId) {
    const normalizedPageId = normalizePageId(pageId);
    if (!pages.some((page) => page.id === normalizedPageId)) return;
    if (normalizedPageId === activePageId) return;

    savePageScrollPosition(activePageId);
    history.pushState(null, "", `#${normalizedPageId}`);
    renderPage();
    document.getElementById("docRoot").focus({ preventScroll: true });
    activePageId = normalizedPageId;
    restorePageScrollPosition(activePageId);
}

function renderNav() {
    const active = currentPage().id;
    const nav = document.getElementById("navList");
    nav.innerHTML = pages
        .map((page, index) => {
            const text = page.i18n[state.lang].nav;
            const cls = page.id === active ? "nav-link active" : "nav-link";
            const divider =
                index === 1 || index === 5
                    ? '<span class="nav-divider" aria-hidden="true"></span>'
                    : "";
            return `<a class="${cls}" href="#${page.id}">${escapeHtml(text)}</a>${divider}`;
        })
        .join("");
}

function renderHeader(page, data) {
    const qr = page.view === "withQr" ? renderQrPanel() : "";
    const compact = qr ? "" : " compact";
    const endpoint =
        data.sections[0]?.type === "endpoint" ? data.sections[0] : null;
    const leadSecondary = data.leadSecondary
        ? `<p class="lead lead-secondary">${inline(data.leadSecondary)}</p>`
        : "";
    const heroEndpoint = endpoint
        ? `
        <div class="hero-endpoint">
          <span class="hero-endpoint-label">${inline(endpoint.title)}</span>
          <div class="hero-endpoint-pill">
            <span>${escapeHtml(endpoint.method)}</span>
            <code>${escapeHtml(endpoint.path)}</code>
          </div>
          <p>${inline(endpoint.text)}</p>
        </div>
      `
        : "";
    const cta = data.cta
        ? `<div class="hero-actions"><a class="primary-cta" href="${data.cta.href}">${escapeHtml(data.cta.label)}</a></div>`
        : "";
    return `
    <header class="page-header${compact}">
      <div>
        <span class="page-kicker">${inline(data.kicker)}</span>
        <h1>${inline(data.title)}</h1>
        <p class="lead">${inline(data.lead)}</p>
        ${leadSecondary}
        ${heroEndpoint}
        ${cta}
      </div>
      ${qr}
    </header>
  `;
}

function renderQrPanel() {
    return `
    <figure class="qr-panel">
      <img src="./assets/LIT-frame.png" alt="LIT Merchant QR payment frame" />
      <figcaption>${inline(copy[state.lang].qrCaption)}</figcaption>
      <a class="frame-download" href="./assets/LIT-frame.png" download="LIT-Merchant-frame.png">${escapeHtml(copy[state.lang].downloadFrame)}</a>
    </figure>
  `;
}

function renderSection(section) {
    if (section.type === "flow") {
        return `
      <section class="section">
        <h2>${inline(section.title)}</h2>
        <ol class="flow-list">
          ${section.items.map((item) => `<li><span>${inline(item)}</span></li>`).join("")}
        </ol>
      </section>
    `;
    }

    if (section.type === "list") {
        return `
      <section class="section">
        <h2>${inline(section.title)}</h2>
        <ul class="info-list">
          ${section.items
              .map(
                  ([term, text]) =>
                      `<li><strong>${inline(term)}</strong><span>${inline(text)}</span></li>`,
              )
              .join("")}
        </ul>
      </section>
    `;
    }

    if (section.type === "table") {
        return `
      <section class="section">
        <h2>${inline(section.title)}</h2>
        <div class="table-wrap">
          <table>
            <thead><tr>${section.columns.map((col) => `<th>${inline(col)}</th>`).join("")}</tr></thead>
            <tbody>
              ${section.rows
                  .map(
                      (row) =>
                          `<tr>${row.map((cell) => `<td>${inline(cell)}</td>`).join("")}</tr>`,
                  )
                  .join("")}
            </tbody>
          </table>
        </div>
      </section>
    `;
    }

    if (section.type === "notice") {
        const style = section.style || "notice";
        return `
      <section class="section ${style}">
        <h2>${inline(section.title)}</h2>
        <p>${inline(section.text)}</p>
      </section>
    `;
    }

    if (section.type === "endpoint") {
        return `
      <section class="section endpoint-section">
        <span class="page-kicker">${inline(section.title)}</span>
        <div class="endpoint-card">
          <span class="endpoint-method">${escapeHtml(section.method)}</span>
          <code>${escapeHtml(section.path)}</code>
        </div>
        <p>${inline(section.text)}</p>
      </section>
    `;
    }

    if (section.type === "sources") {
        return `
      <section class="section">
        <h2>${inline(section.title)}</h2>
        <div class="source-list">
          ${sourceRepos
              .map(
                  (source) => `
                <a class="source-link" href="${source.url}" target="_blank" rel="noreferrer">
                  <span class="source-icon">${githubLogo}</span>
                  <strong>${escapeHtml(source.name)}</strong>
                  <span class="source-note">${inline(source.note[state.lang])}</span>
                </a>
              `,
              )
              .join("")}
        </div>
      </section>
    `;
    }

    return "";
}

function renderExample(key) {
    const group = snippets[key] || snippets.precreate;
    const first = languageTabs[0][0];
    const tabs = languageTabs
        .map(([id, label]) => {
            const active = id === first ? " active" : "";
            return `<button type="button" class="${active}" data-code-tab="${id}">${escapeHtml(label)}</button>`;
        })
        .join("");
    const blocks = languageTabs
        .map(([id, label]) => {
            const active = id === first ? "" : " hidden";
            return `<pre data-code-panel="${id}"${active}><code>${escapeHtml(group[id] || group.python)}</code></pre>`;
        })
        .join("");

    return `
    <section class="section">
      <h2>${escapeHtml(copy[state.lang].examplesTitle)}</h2>
      <p>${inline(copy[state.lang].examplesLead)}</p>
      <div class="code-block" data-code-block>
        <div class="code-toolbar" role="tablist" aria-label="Code language">${tabs}</div>
        ${blocks}
      </div>
    </section>
  `;
}

function renderPagerButton(page, label, direction) {
    if (!page) {
        return `
      <span class="pager-button ${direction} disabled" aria-disabled="true">
        <span>${escapeHtml(label)}</span>
      </span>
    `;
    }

    return `
    <a class="pager-button ${direction}" href="#${page.id}" data-page-link="${page.id}">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(page.i18n[state.lang].nav)}</strong>
    </a>
  `;
}

function renderPagePager(page) {
    const index = pages.findIndex((item) => item.id === page.id);
    const previousPage = index > 0 ? pages[index - 1] : null;
    const nextPage =
        index >= 0 && index < pages.length - 1 ? pages[index + 1] : null;

    return `
    <nav class="page-pager" aria-label="${escapeHtml(copy[state.lang].pageNavigation)}">
      ${renderPagerButton(
          previousPage,
          copy[state.lang].previousPage,
          "previous",
      )}
      ${renderPagerButton(nextPage, copy[state.lang].nextPage, "next")}
    </nav>
  `;
}

function renderPage() {
    const page = currentPage();
    const data = page.i18n[state.lang];
    document.documentElement.lang =
        state.lang === "zh" ? "zh-Hans" : state.lang;
    document.getElementById("currentPageTitle").textContent = data.nav;
    document.querySelector('[data-i18n="envLabel"]').textContent =
        copy[state.lang].envLabel;
    document.querySelector('[data-i18n="marketLabel"]').textContent =
        copy[state.lang].marketLabel;
    document.querySelector('[data-i18n="languageLabel"]').textContent =
        copy[state.lang].languageLabel;
    document.getElementById("languageSelect").value = state.lang;

    const sections = data.sections
        .filter(
            (section, index) => !(index === 0 && section.type === "endpoint"),
        )
        .map(renderSection)
        .join("");
    const root = document.getElementById("docRoot");
    root.className = `doc-root page-${page.id}`;
    root.innerHTML = `
    ${renderHeader(page, data)}
    <div class="section-grid">
      ${sections}
      ${page.hideExample ? "" : renderExample(page.exampleKey)}
      ${renderPagePager(page)}
    </div>
  `;
    renderNav();
}

document.addEventListener("click", (event) => {
    const tab = event.target.closest("[data-code-tab]");
    if (tab) {
        const block = tab.closest("[data-code-block]");
        const selected = tab.dataset.codeTab;
        block
            .querySelectorAll("[data-code-tab]")
            .forEach((button) =>
                button.classList.toggle("active", button === tab),
            );
        block.querySelectorAll("[data-code-panel]").forEach((panel) => {
            panel.hidden = panel.dataset.codePanel !== selected;
        });
        return;
    }

    const menuButton = event.target.closest("#menuButton");
    if (menuButton) {
        document.querySelector(".sidebar").classList.toggle("open");
        return;
    }

    const navLink = event.target.closest(".nav-link");
    if (navLink) {
        event.preventDefault();
        const pageId = navLink.getAttribute("href").replace("#", "");
        if (window.matchMedia("(max-width: 940px)").matches) {
            document.querySelector(".sidebar").classList.remove("open");
        }
        navigateToPage(pageId);
        return;
    }

    const pageLink = event.target.closest("[data-page-link]");
    if (pageLink) {
        event.preventDefault();
        navigateToPage(pageLink.dataset.pageLink);
    }
});

document
    .getElementById("languageSelect")
    .addEventListener("change", (event) => {
        savePageScrollPosition(activePageId);
        state.lang = event.target.value;
        localStorage.setItem("lit-doc-lang", state.lang);
        renderPage();
        restorePageScrollPosition(activePageId);
    });

window.addEventListener("hashchange", renderCurrentRoute);
window.addEventListener("popstate", renderCurrentRoute);

window.addEventListener("beforeunload", () => {
    savePageScrollPosition(activePageId);
});

renderPage();
activePageId = currentPage().id;
restorePageScrollPosition(activePageId);
