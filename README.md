# 성능 개선 사후 보고서

## 1. 프로젝트 개요
### 1.1 프로젝트 목적
- Core Web Vitals 개선을 통한 사용자 경험 향상

### 1.2 초기 성능 상태

| 지표 | 초기 값 | 점수 등급 |
|-----|--------|----------|
| 성능 점수 | 51 | 낮음 (50-89) |
| 접근성 | 81 | 중간 (50-89) |
| 권장사항 | 93 | 높음 (90-100) |
| 검색엔진 최적화 | 82 | 중간 (50-89) |

#### Core Web Vitals 세부 지표

| 지표 | 값 | 상태 |
|-----|-----|-----|
| Largest Contentful Paint (LCP) | 16.2초 | 불량 (목표: 2.5초 이하) |
| First Contentful Paint (FCP) | 2.4초 | 개선 필요 (목표: 1.8초 이하) |
| Cumulative Layout Shift (CLS) | 0.041 | 양호 (목표: 0.1 이하) |
| Total Blocking Time (TBT) | 930밀리초 | 불량 (목표: 200밀리초 이하) |
| Speed Index | 2.4초 | 양호 (목표: 3.4초 이하) |

#### 초기 성능 분석

이러한 초기 상태를 바탕으로, LCP와 TBT 개선에 우선순위를 두고 성능 최적화 작업을 진행해야 할 것으로 보입니다. 이미지 최적화, 자바스크립트 실행 최적화, 서버 응답 시간 개선 등이 주요 개선 목표입니다.

## 2. 성능 개선 과정 및 결과

| 개선 항목 | 개선 이유 | 개선 방법 | 커밋 해시 | 향상된 지표 | 비고 |
|----------|---------|----------|----------|------------|------|
| 제품 이미지 최적화 | LCP 개선 | JPG에서 WebP 형식으로 변환 | [커밋 링크](https://github.com/kimfield98/web-performance/commit/fa37bbbf8fd70c05684a6bd92269127ca611d016) | LCP: 16.2초 → 10.1초 <br> PageSpeed: 51 → 59 | 총 절감 용량: <br>1,980KiB |
| Google Fonts 자체 호스팅 | FCP, LCP 개선 | 폰트 파일 다운로드 및 호스팅 | [커밋 링크](https://github.com/kimfield98/web-performance/commit/155ca9993c3db1396adbd0aa5133b4c2923b3dba) | FCP: 2.4초 → 1.8초 <br> LCP: 11.3초 → 9.7초 <br> PageSpeed: 51 → 59 | FOUT 감소 |
| 제품 이미지 Lazy Loading | 초기 로딩 시간 단축 | product.js에 Intersection Observer API 활용 | [커밋 링크](https://github.com/kimfield98/web-performance/commit/063c33869288d3d7eccee7cf82b7261220702cca) | LCP: 9.7초 → 10.5초 <br> PageSpeed: 59 → 53 | 초기 로드 <br>리소스 감소 |
| `<picture>` 태그 사용 | 반응형 이미지 최적화 | 다양한 해상도와 형식의 이미지 제공 | [커밋 링크](https://github.com/kimfield98/web-performance/commit/b5dffde2a59e325e88b441acb236330ec2bfa770) | LCP: 10.5초 → 3.8초 <br> PageSpeed: 53 → 57 | 디바이스별 <br>최적 이미지 제공 |
| 비필수 서비스 <br>로딩 지연 | 초기 로딩 속도 개선 | 중요하지 않은 스크립트 지연 로딩 | [커밋 링크](https://github.com/kimfield98/web-performance/commit/4db185a73d06f48d249c0d4eb28fac91cdc36a18) | LCP: 3.8초 → 2.7초 <br> FCP: 1.9초 → 1.1초 <br> PageSpeed: 57 → 77 | TBT 460ms → 810ms로 증가 |
| 명시적 이미지 크기 설정 | CLS 개선, 레이아웃 안정화 | 모든 이미지에 width와 height 속성 추가 | [커밋 링크](https://github.com/kimfield98/web-performance/commit/69d2361c8639c778745a4674d92dc6c653ef038b) | LCP: 2.7초 → 2.6초 <br> FCP: 1.1초 → 0.8초 <br> TBT: 810ms → 600ms <br> PageSpeed: 77 → 82 | 레이아웃 시프트 방지 |
| 제품 로딩 및 무거운 연산 최적화 | TBT 개선, 전반적 성능 향상 | 제품 데이터 로딩 최적화, 무거운 연산 개선 | [커밋 링크](https://github.com/kimfield98/web-performance/commit/315d04cf67683fa5d57dba8fd2bd13249f0ada3c) | LCP: 2.6초 → 3.5초 <br> TBT: 600ms → 0ms <br> PageSpeed: 82 → 91 | 상호작용 지연 대폭 감소 |
| 국가 바 가시성 토글 최적화 | 상호작용 성능 개선 | 토글 로직 최적화, 렌더링 성능 향상 | [커밋 링크](https://github.com/kimfield98/web-performance/commit/94dcfc1b777953383c6d8a78121b4a2e632a4560) | LCP: 3.5초 → 3.8초 <br> TBT: 0ms → 80ms <br> CLS: 0.009 → 0 <br> PageSpeed: 91 → 89 | 레이아웃 안정성 <br>완벽 개선 |
| 국가 배너 레이아웃 시프트 제거 | CLS 유지 및 LCP 개선 | 국가 배너 렌더링 로직 최적화 | [커밋 링크](https://github.com/kimfield98/web-performance/commit/de11abb03200916cbbefde28cf4f0b3a9a1bd173) | LCP: 3.8초 → 3.3초 <br> TBT: 80ms → 10ms <br> PageSpeed: 89 → 92 | 페이지 로드 시 <br>안정성 향상 |
| 제품 이미지 사이즈 최적화 | LCP 개선, 전반적 성능 향상 | 더 구체적인 이미지 크기 지정 | [커밋 링크](https://github.com/kimfield98/web-performance/commit/8be9ea2ce0041ab402f79f1866457de78cd0565f) | LCP: 3.3초 → 2.7초 <br> TBT: 10ms → 0ms <br> PageSpeed: 92 → 98 | 이미지 로딩 시간 단축 |

## 3. 최종 성능 개선 결과

| 지표 | 초기 값 | 최종 값 | 개선율 |
|-----|--------|--------|-------|
| LCP | 16.2초 | 2.4초 | 85.2% |
| FCP | 2.4초 | 1.1초 | 54.2% |
| CLS | 0.041 | 0 | 100% |
| TBT | 930ms | 0ms | 100% |
| Speed Index | 2.4초 | 1.3초 | 45.8% |
| PageSpeed Insights (모바일) | 51 | 98 | 92.2% |

### 분석 및 시사점:

1. **LCP 추가 개선**: 제품 이미지 사이즈 최적화로 LCP가 2.7초로 더욱 개선되었고, 최종적으로 2.4초까지 감소했습니다.
2. **TBT 완전 제거**: 0ms를 달성하여 페이지 상호작용성이 최고 수준으로 향상되었습니다.
3. **CLS 유지**: 0을 유지하여 완벽한 레이아웃 안정성을 계속 제공하고 있습니다.
4. **PageSpeed 점수 최고치**: 98점으로 상승하여 거의 완벽에 가까운 성능을 달성했습니다.
5. **Speed Index 개선**: 1.3초로 감소하여 전반적인 페이지 로딩 속도가 크게 향상되었습니다.

### 향후 개선 방향:

1. 남은 2점을 개선하기 위한 미세 조정 검토
2. 지속적인 성능 모니터링 및 최적화 프로세스 유지
3. 새로운 기능 추가 시 성능 영향 평가 프로세스 수립

## 4. 주요 학습 포인트

- 이미지 최적화의 중요성과 세부적인 크기 지정이 성능에 미치는 큰 영향
- 점진적이고 지속적인 최적화 과정을 통한 누적 효과의 중요성
- 성능 최적화에서 작은 개선사항도 전체 점수에 큰 영향을 줄 수 있음
- Core Web Vitals의 각 지표 간 상호작용과 균형의 중요성
- 사용자 경험과 기술적 성능 지표의 조화로운 개선 필요성

## 5. 결론

- 본 프로젝트를 통해 PageSpeed Insights 점수를 51에서 98로 대폭 개선하였습니다.
- LCP를 85.2% 개선하여 사용자의 체감 로딩 속도를 획기적으로 향상시켰습니다.
- TBT와 CLS를 완전히 제거하여 페이지 상호작용성과 레이아웃 안정성을 최고 수준으로 끌어올렸습니다.
- 이미지 최적화, 특히 구체적인 크기 지정이 성능 개선에 큰 영향을 미칠 수 있음을 확인했습니다.
- 성능 최적화는 끊임없는 개선과 세밀한 조정의 과정임을 재확인했으며, 이는 사용자 경험 향상과 비즈니스 목표 달성에 직접적으로 기여할 것으로 예상됩니다.
