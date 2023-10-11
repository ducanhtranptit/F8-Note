import json

# Chuỗi JSON đầu vào
json_string = '[{"name":"Alice","age":25},{"name":"Bob","age":30},{"name":"Charlie","age":22}]'

# Chuyển đổi JSON thành danh sách các từ điển
dictionary_list = json.loads(json_string)

# In kết quả
print(dictionary_list)
