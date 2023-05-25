---
title: 15 hook trong react
sidebar_label: "Hook react"
sidebar_position: 2
slug: /nextjs/basic/hook-react
---

Hook được chia làm 3 loại:

- Basic Hooks gồm: **useState**, **useEffect** và **useContext**
- Additional Hooks gồm: useReducer, useCallback, useMemo, useRef,useImperativeHandle, useLayoutEffect, useDebugValue, useDeferredValue, useTransition và useId
- Cuối cùng là Library Hooks gồm: useSyncExternalStore, useInsertionEffect

### useState

Cái tên nói lên tất cả 🤣 hàm này nhận đầu vào là giá trị khởi tạo của 1 state và trả ra 1 mảng gồm có 2 phần tử, phần tử đầu tiên là state hiện tại, phần tử thứ 2 là 1 function dùng để update state (giống như hàm setState cũ vậy).

```ts
const [isLoading, setIsLoading] = useState(false);
```

Khi muốn update state cho isLoading là true thì chỉ cần gọi đến hàm setLoading(true) là Ok, rất đơn giản và gọn nhẹ phải không nào 😄 Nếu như bạn đang làm việc với React-Redux để quản lý State thì mình khuyên bạn chỉ nên sử dụng useState để quản lý các UI State (là những state có giá trị boolean nhằm mục đích render ra UI) để tránh việc conflict với cả Redux State và maintain sau này.

### useEffect

UseEffect giúp chúng ta xử lý các side effects, useEffect sẽ tương đương với các hàm componentDidMount, componentDidUpdate và componentWillUnMount trong LifeCycle.

```ts
import { callApi } from './actions'

const App = ({ callApi, data }) => {
    useEffect(() => {
    callApi('some_payload_')
    }, [])
    return(
    <div>
            {data.map(item => {// do something })}
    </div>
    )
}

const mapDispatchToProps = dispatch => ({
    callApi: (keyword) => dispatch(callApi)
})

export default connect({}, mapDispatchToProps)(App)
```

Có thể thấy trong useEffect ta cũng có thể thực hiện công việc call API giống như hàm ComponentDidMount ngày trước. Để tránh việc hàm useEffect luôn chạy vào mỗi khi có thay đổi State thì ta có thể truyền vào tham số thứ 2 trong useEffect đó là 1 array, trong array này ta có thể truyền vào đó những giá trị mà useEffect sẽ subcribe nó, tức là chỉ khi nào những giá trị đó thay đổi thì hàm useEffect mới được thực thi. Hoặc bạn cũng có thể truyền vào 1 array rỗng thì khi đó nó sẽ chỉ chạy 1 lần đầu tiên sau khi render giống với hàm ComponentDidMount.

```ts
useEffect(
  () => {
    const subscription = props.source.subscribe();
    return () => {
      subscription.unsubscribe();
    };
  },
  [props.source] // giá trị được subcrive
);
```

Còn 1 vấn đề nữa đó là trong hàm useEffect ta có thể return về 1 function (chú ý là bắt buộc phải return về function) thì khi làm điều này nó sẽ tương đương với việc ta sử dụng hàm LifeCycle componentWillUnMount.

Tổng kết lại thì đây là những gì ta cần nhớ trong hàm useEffect

```ts
useEffect(() => {
  // almost same as componentDidMount
  console.log("mounted!");
  return () => {
    // almost same as componentWillUnmount
    console.log("unmount!");
  };
}, []);
```

### useContext

Chia sẻ state giữa các component là bài toán phổ biến trong React App. Giải pháp tốt nhất là bạn phải lifting state (đẩy state từ component con lên component cha). Nhưng nó yêu cầu bạn phải truyền props xuống cho các component con. Điều đó không phải là vấn đề quá lớn, nhưng trong một số trường hợp truyền props xuống quá nhiều cấp component lại rất khó khăn và tốn nhiều thời gian.
Để tránh được vấn đề này, bạn có thể tạo một context để thêm những shared state và sau đó component nào cần thì bạn gọi context đó ra xài, không cần phải truyền từ cha xuống con nữa. Nó cũng giống như biến global được chia sẻ và sử dụng ở nhiều nơi, nhưng context được quản lí tốt hơn để maintain code dễ hơn.

```ts
import React from "react";

const ExampleContext = React.createContext();

const App = () => {
  return (
    <ExampleContext.Provider value={{ color: "red" }}>
      <div className="App">
        <ChildComponent />
      </div>
    </ExampleContext.Provider>
  );
};

const ChildComponent = () => {
  const { color } = React.useContext(ExampleContext);

  return <p style={{ color }}>This text is {color}</p>;
};

export default App;
```

Đầu tiên chúng ta sẽ định nghĩa 1 context:

```ts
const ExampleContext = React.createContext();
```

Sau đó bao bọc toàn bộ thành phần DOM của component bằng thẻ Provider, đồng thời truyền giá trị mà mình muốn chia sẻ đến các component khác.

```ts
<ExampleContext.Provider value={{ color: "red" }}>
  <div className="App">
    <ChildComponent />
  </div>
</ExampleContext.Provider>
```

Như vậy là chúng ta đã có thể sử dụng context đó trong các component con thông qua useContext

### useReducer

Giống như Reducer trong Redux thì useReducer cũng nhận vào một reducer dạng (state, action) và trả ra một newState. Khi sử dụng chúng ta sẽ nhận được một cặp bao gồm current state và dispatch function.

```ts
import * as React from "react";

const countReducer = (state, action) => {
  const { type, step } = action;
  switch (type) {
    case "INCREMENT": {
      return {
        ...state,
        count: state.count + step,
      };
    }
    case "DECREMENT": {
      return {
        ...state,
        count: state.count - step,
      };
    }
    default:
      return state;
  }
};

const Counter = ({ initialCount = 0, step = 1 }) => {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  });
  const { count } = state;
  const increment = () => dispatch({ type: "INCREMENT", step });
  const decrement = () => dispatch({ type: "DECREMENT", step });
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

const App = () => {
  return <Counter />;
};

export default App;
```

### useCallback

useCallback có nhiệm vụ tương tự như useMemo nhưng khác ở chỗ function truyền vào useMemo bắt buộc phải ở trong quá trình render trong khi đối với useCallback đó lại là function callback của 1 event nào đó như là onClick chẳng hạn. Ví dụ:

```ts
const App = () => {
  const [text, setText] = React.useState("");

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Wrap />
    </>
  );
};

const Wrap = () => {
  const [isChecked, setIsChecked] = React.useState(false);
  const toggleChecked = useCallback(
    () => setIsChecked(!isChecked),
    [isChecked]
  );

  return <Checkbox value={isChecked} onClick={toggleChecked} />;
};

const Checkbox = React.memo(({ value, onClick }) => {
  console.log("Checkbox is renderd!");
  return (
    <div style={{ cursor: "pointer" }} onClick={onClick}>
      {value ? "☑" : "□"}
    </div>
  );
});
```

Trong ví dụ trên ta sử dụng useCallback cho sự kiện onClick, điều này có nghĩa là việc thay đổi giá trị text trong ô Input sẽ không làm component Checkbox bị re-render.

### useMemo

useMemo giúp ta kiểm soát việc được render dư thừa của các component con, nó khá giống với hàm shouldComponentUpdate trong LifeCycle. Bằng cách truyền vào 1 tham số thứ 2 thì chỉ khi tham số này thay đổi thì thằng useMemo mới được thực thi

Không sử dụng useMemo

```ts
const NotUsingMemo = ({ products }) => {
  const soldoutProducts = products.filter((x) => x.isSoldout === true); // soldoutProducts sẽ luôn luôn thực thi mỗi khi NotUsingMemo được re-render
};
```

Có sử dụng useMemo

```ts
const UsingMemo = ({ products }) => {
  const soldoutProducts = useMemo(
    () => products.filter((x) => x.isSoldout === true), // / soldoutProducts sẽ chỉ thực thi khi props products thay đổi
    [products] // watch products
  );
};
```

### useRef

useRef hook là một function trả về một object với thuộc tính current được khởi tạo thông qua tham số truyền vào. Object được trả về này có thể mutate và sẽ tồn tại xuyên suốt vòng đời của component.

```ts
const refContainer = useRef(initialValue);
```

Trong React, ref là một thuộc tính của một tag hay một element đại diện cho chính nó. ref cho phép chúng ta truy cập đến DOM node hoặc React element đã được mount. Trong vanila Javascript, chúng ta làm việc với DOM elements bằng cách gọi document.getElementById(). Với ref trong React chúng ta không cần phải làm vậy. Thuộc tính ref sẽ tham chiếu đến chính xác element cần dùng.

```ts
<input type="text" ref={textInput} />
```

ref nhận vào một biến hoặc một function. Nếu là function thì function này sẽ được chạy khi element được mount

```ts
<button ref={(element) => console.log(element)}> Send </button>
```

Tìm hiểu thêm [tại đây][useRef]

### useImperativeHandle

UseImperativeHandle rất giống useRef, nhưng nó cho phép bạn làm hai việc:

- Nó cho phép bạn kiểm soát giá trị được trả về. Thay vì trả về phần tử phiên bản, bạn nói rõ giá trị trả về sẽ là gì (xem đoạn mã bên dưới).
- Nó cho phép bạn thay thế các chức năng gốc (chẳng hạn như blur, focusv.v.) bằng các chức năng của riêng bạn, do đó cho phép các tác dụng phụ đối với hành vi bình thường hoặc hành vi khác hoàn toàn. Mặc dù vậy, bạn có thể gọi hàm bất cứ điều gì bạn thích.
  Có thể có nhiều lý do bạn muốn có thể làm một trong hai điều trên; bạn có thể không muốn hiển thị các thuộc tính gốc cho phụ huynh hoặc có thể bạn muốn thay đổi hành vi của một hàm gốc. Có thể có nhiều lý do. Tuy nhiên, useImperativeHandlehiếm khi được sử dụng.
  Ví dụ về useImperativeHandle

```ts
import React, { useRef } from "react";
import { render } from "react-dom";
import Button from "./Button";

import "./styles.css";

function App() {
  const buttonRef = useRef(null);

  const handleClick = () => {
    console.log(Object.keys(buttonRef.current)); // ['someExposedProperty']
    console.log("click in index.tsx");
    buttonRef.current.someExposedProperty();
  };

  return (
    <div>
      <Button onClick={handleClick} ref={buttonRef} />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
```

```ts
import React, { useRef, useImperativeHandle, forwardRef } from "react";

function Button(props, ref) {
  const buttonRef = useRef();
  useImperativeHandle(ref, () => ({
    someExposedProperty: () => {
      console.log("we're inside the exposed property function!");
    },
  }));
  return (
    <button ref={buttonRef} {...props}>
      Button
    </button>
  );
}

export default forwardRef(Button);
```

### useLayoutEffect

Nếu bạn thấy hiện tượng giật, sử dụng để đo vị trí trong DOM (đo vị trí của element,...) hãy thử dùng useLayoutEffect. Nó cũng giống useEffect nhưng khác cách chạy. useLayoutEffect sẽ chạy trước khi cập nhật lại UI.
Trình tự thực hiện như sau:

- Bạn sẽ gây ra 1 event (thay đổi state/props, re-render từ component cha,...)
- Render component.
- Chạy useLayoutEffect, và react sẽ đợi đến khi nào nó hoàn thành.
- Màn hình UI được cập nhật.

=> Phía trên là những Hook mà chúng ta thường sử dụng nhất. còn những hook phía dưới đây chúng ta rất ít khi sử dụng.

### useDebugValue

Nếu ai đang viết Custom hook thì useDebugValue có thể nói là một "công cụ" hữu ích, giúp chúng ta có thể dễ dàng debug được hook đó bằng việc nó sẽ hiển thị thông tin ta cần kiểm chứng trong React DevTools.

```ts
import React, { useDebugValue, useState } from " react ";
export function useExampleHook() {
  const [b, setB] = useState(false);
}
useDebugValue(b ? " Rocket is Active " : " Rocket is Inactive ");
return [b, setB];
export default function App() {
  useExampleHook();
  return <div />;
}
```

Tìm hiểu thêm [tại đây][useDebugValue]

### useDeferredValue

useDeferredValue là 1 hook sẽ bọc các props / states value và nhận sự trì hoãn tối đa. Nó sẽ giúp React biết nên render vào sau thay vì lúc này (user đang nhập input)

```ts
import { useState, useDeferredValue } from "react";
const [value, setValue] = useState("");
const deferredValue = useDeferredValue(value, {
  timeoutMs: 5000,
});
```

Lưu ý rằng, ví dụ trên không chỉ ra sự render. React vẫn sẽ render ra nếu components sẵn sàng trước thời gian cho trước, nó sẽ xóa các thay đổi đến DOM. Nếu ta sử dụng chức năng này có thể dẫn đến render không nhất quán, ở đây ta hướng đến render ưu tiền một phần nào đó so với phần còn lại

### useTransition

Theo mặc định, tất cả các bản cập nhật trạng thái React là khẩn cấp. Các bản cập nhật trạng thái khác nhau trong ứng dụng của bạn cạnh tranh cho các tài nguyên giống nhau, làm chậm nó. Hook useTransition React giải quyết vấn đề này bằng cách cho phép bạn đánh dấu một số cập nhật trạng thái là không khẩn cấp. Điều này cho phép cập nhật trạng thái khẩn cấp để làm gián đoạn những cập nhật có mức độ ưu tiên thấp hơn.

```ts
function Button({ children, onClick }) {
  const [startTransition, isPending] = useTransition();
  return (
    <>
      <button onClick={handleClick} disabled={isPending}>
        {children}
      </button>
      {isPending ? spinner : null}
    </>
  );
}
```

### useId

Bạn sử dụng hook useId trong các tình huống yêu cầu ID duy nhất (ngoại trừ các khóa trong danh sách). Mục đích chính của nó là tạo các ID duy nhất trên máy khách và máy chủ, tránh lỗi không khớp hydrat hóa máy chủ React.

```ts
const id = useId();
```

Trong phần khai báo Tôi là một chuỗi duy nhất bao gồm : mã thông báo. Sau khi khai báo, bạn có thể vượt qua Tôi biến trực tiếp đến (các) phần tử cần nó.

### useSyncExternalStore

Không giống như các móc useTransition và useDeferredValue hoạt động với mã ứng dụng, useSyncExternalStore hoạt động với các thư viện. Nó cho phép ứng dụng React của bạn đăng ký và đọc dữ liệu từ các thư viện bên ngoài. Móc useSyncExternalStore sử dụng khai báo sau:

```ts
const state = useSyncExternalStore(subscribe, getSnapshot[, getServerSnapshot]);
```

Đoạn code này có những nội dung sau:

- State: giá trị của kho dữ liệu mà hook useSyncExternalStore trả về.
- Subscribe: đăng ký một cuộc gọi lại khi kho dữ liệu thay đổi.
- getSnapshot: trả về giá trị hiện tại của kho dữ liệu.
- getServerSnapshot: trả về ảnh chụp nhanh được sử dụng trong quá trình kết xuất máy chủ.
  Với useSyncExternalStore, bạn có thể đăng ký toàn bộ kho dữ liệu hoặc một trường cụ thể trong kho dữ liệu.

Trong phần khai báo Tôi là một chuỗi duy nhất bao gồm : mã thông báo. Sau khi khai báo, bạn có thể vượt qua Tôi biến trực tiếp đến (các) phần tử cần nó.

### useInsertionEffect

Móc useInsertionEffect là một móc React mới khác hoạt động với các thư viện. Tuy nhiên, thay vì lưu trữ dữ liệu, hook useInsertionEffect hoạt động với các thư viện CSS-in-JS. Móc này giải quyết các vấn đề về hiệu suất kết xuất kiểu. Nó tạo kiểu cho DOM trước khi đọc bố cục trong hook useLayoutEffect.

[useRef]: https://viblo.asia/p/useref-va-forwardref-trong-react-1VgZv6dYZAw
[useDebugValue]: https://viblo.asia/p/tim-hieu-ve-react-hook-su-dung-usedebugvalue-OeVKB9DE5kW
